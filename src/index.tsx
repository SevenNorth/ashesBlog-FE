import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';

import './assets/less/reset.less'
import App from './App';

import { createStore } from 'redux' ;
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import Result from './pages/result';
import Article from './pages/article';

const store = createStore(rootReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Router>
        <Switch>
          <Route path="/app" component={ App } />
          <Route path="/result" component={ Result } />
          <Route path="/article" component={ Article } />
          <Redirect to="/app/home" from="/" />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
