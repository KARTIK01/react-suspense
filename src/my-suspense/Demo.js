import React from 'react';
import Suspense from './Suspense';
const DynamicLoadingComponent = React.lazy(() => import('./DynamicLoadingComponent'));

function Demo(props) {
  return (
      <Suspense fallback="Loader">
        <DynamicLoadingComponent />
      </Suspense>
  );
}

Demo.propTypes = {};
Demo.defaultProps = {};

export default Demo;
