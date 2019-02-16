import React from 'react';
import Button from '../button/Button';
import Loader from './Loader';

// import DynamicLoadingComponent from './DynamicLoadingComponent';
const BigComponent = React.lazy(() => import('./BigComponent'));

function Demo() {
  const [ show, setShow] = React.useState(false);
  return (
      <React.Fragment>
        <Button onClick={() => setShow(!show)} >TOGGLE</Button>
        {
          show &&
          (<React.Suspense fallback={<Loader />}>
            <BigComponent/>
          </React.Suspense>)
        }
      </React.Fragment>
  )
}

Demo.propTypes = {};
Demo.defaultProps = {};

export default Demo;
