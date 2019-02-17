import React, {Component} from 'react';

class InternalSuspense extends Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  render() {
    const {fallback, children} = this.props;
    const { hasError } = this.state;
    if(hasError)
      return fallback;
    return children;
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch');
   this.setState({hasError: true});
    window.suspended
        .then(() => this.setState({hasError: false}));
  }

}

export default InternalSuspense;
