import React from 'react';
import './App.css';
import MyCache from './my-suspense/MyCache';
import Demo from './syntax/Demo';

function App() {
  let component;
  if(window.location.href.indexOf('internal-working') > 0) {
    component = <MyCache/>
  } else {
    component = <Demo/>
  }
  return (
      <div className="App">
        {component}
      </div>
  );
}

export default App;
