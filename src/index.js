import React from 'react'
import { render } from 'react-dom'
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'

import App from './App';
import Article from './views/article'
import 'antd-mobile/dist/antd-mobile.less';
import 'antd/dist/antd.less'
render(
  <Router>
    <Switch>
      <Route path='/app' component={App}></Route>
      <Route path='/article' component={Article}></Route>
      <Redirect to="/app/home" from="/" exact />
    </Switch>
  </Router>,
  document.getElementById('root')
);