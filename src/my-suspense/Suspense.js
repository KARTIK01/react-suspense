import React from 'react';


const sleep = (time, value = "value") => new Promise((resolve, reject) => setTimeout(resolve(value), time));

const loadResource = id => sleep(1000, id);


function Suspense(props) {
  const { fallback, children } = props;
  const suspended = loadResource(children)
      .then(res => {
        console.log('res',res);
      });
  return <div>hh</div>
}

export default Suspense;
