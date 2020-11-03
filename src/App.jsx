import React, { Component } from 'react'
import CustomTabBar from './components/tabbar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import { tabbarRoutes } from './routes'
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
            flex:1,
            overflowX:"hidden",
          }}>
            <Switch>
              {
                tabbarRoutes.map(route=>(
                  <Route path={route.path} component={route.component} key={route.path}></Route>
                ))
              }
            </Switch>
          </div>
          <div>
            <CustomTabBar/>
          </div>
        </Router>
      </div>
    )
  }
}
