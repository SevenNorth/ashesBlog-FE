import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'

import './assets/less/reset.less'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/app" component={ App } />
        <Redirect to="/app/home" from="/" exact />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
