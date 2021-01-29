import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';

import './assets/less/reset.less'
import App from './App';

import { createStore } from 'redux' ;
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Router>
        <Switch>
          <Route path="/app" component={ App } />
          <Redirect to="/app/home" from="/" exact />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
