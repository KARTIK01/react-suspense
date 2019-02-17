import React from 'react';
import Button from '../button/Button';
import Loader from './Loader';
import {Link} from '@reach/router';
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
        <br />
        <Link to='/internal-working'>Internal Working</Link>
      </React.Fragment>
  )
}

Demo.propTypes = {};
Demo.defaultProps = {};

export default Demo;
