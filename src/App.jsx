import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'

import CustomTabBar from './components/tabbar'

import { tabbarRoutes } from './routes'
export default class App extends Component {
  render() {
    return (
      <div style={{
        display:"flex",
        flexDirection:"column",
        height:"100%",
      }}>
        <div style={{
          flex:1,
          overflowX:"hidden",
        }}>
          <Switch>
            {
              tabbarRoutes.map(route=>(
                <Route path={route.path} component={route.component} key={route.path}>{route.meta.title}</Route>
              ))
            }
          </Switch>
        </div>
        <CustomTabBar />
      </div>
    )
  }
}
