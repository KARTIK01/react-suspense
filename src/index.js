import React from 'react';
import {Router} from '@reach/router';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import InternalLoader from './my-suspense/InternalLoader';
import Demo from './syntax/Demo';

const applicationRoutes = (
    <Router style={{ height: '100%', textAlign: 'center' }}>
      <Demo path='/' />
      <InternalLoader path='internal-working' />
    </Router>
);

ReactDOM.render(applicationRoutes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
