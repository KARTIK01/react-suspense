import React from 'react';
import Button from '../button/Button';
import Loader from './Loader';
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
        <a href={`${window.location.href}internal-working`}>
          Internal Working
        </a>
      </React.Fragment>
  )
}

Demo.propTypes = {};
Demo.defaultProps = {};

export default Demo;
