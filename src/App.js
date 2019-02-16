import React from 'react';
import './App.css';
import InternalSuspense from './my-suspense/InternalLoader';
import Demo from './syntax/Demo';

function App() {
  let component;
  if(window.location.href.indexOf('internal-working') > 0) {
    component = <InternalSuspense/>
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
