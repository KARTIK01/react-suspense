import React from 'react';
import Loader from '../syntax/Loader';
import Button from '../button/Button';

const loadResource = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(id), 1000);
  });
};

const cache = {};

function read(key) {
  if(cache[key]) {
    return cache[key]
  }
  const suspended = loadResource(key)
      .then(data => {
        cache[key] = data;
        return data;
      });
  throw  suspended;
}

function BigComponent() {
  const fooResult = read('foo');
  return (
    <div>
      {fooResult}
    </div>
  )
}

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
        <a href='/'>
          Syntax Demo
        </a>
      </React.Fragment>
  )
}


export default Demo;
