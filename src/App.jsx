import React, { Component } from 'react'
import CustomTabBar from './components/tabbar'
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'

import Home from './views/home'
import Category from './views/category'
import New from './views/new'
import Admin from './views/admin'

export default class App extends Component {
  render() {
    return (
      <div style={{
        display:"flex",
        flexDirection:"column",
        height:"100%",
      }}>
        <Router>
          <div style={{
            flex:1
          }}>
            <Switch>
              <Route path='/app/home' component={Home}></Route>
              <Route path='/app/category' component={Category}></Route>
              <Route path='/app/new' component={New}></Route>
              <Route path='/app/admin' component={Admin}></Route>
              <Redirect to="/app/home" />
            </Switch>
          </div>
          <CustomTabBar/>
        </Router>
      </div>
    )
  }
}
