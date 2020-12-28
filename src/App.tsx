import React from 'react'
import {Route,Switch} from 'react-router-dom'

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Home from './pages/home';
import Discovery from './pages/discovery';
import Portfolio from './pages/portfolio';
import Mine from './pages/mine';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/app/home"  component={ () => <Home/> }/>
        <Route path="/app/discovery"  component={ Discovery }/>
        <Route path="/app/portfolio"  component={ Portfolio }/>
        <Route path="/app/mine"  component={ Mine }/>
      </Switch>
      <BottomNavigation>
        <BottomNavigationAction label="首页" showLabel />
        <BottomNavigationAction label="发现" showLabel  />
        <BottomNavigationAction label="作品集" showLabel />
        <BottomNavigationAction label="我的" showLabel />
      </BottomNavigation>
    </div>
  )
}
