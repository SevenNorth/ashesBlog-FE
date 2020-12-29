import React from 'react'
import {Route,Switch} from 'react-router-dom'

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TabbarRoutes from './routes/tabbarRoutes';

import Home from './pages/home';
import Discovery from './pages/discovery';
import Portfolio from './pages/portfolio';
import Mine from './pages/mine';
import { ITabbarRoute } from './constantTypes/routeTypes';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/app/home"  component={ Home }/>
        <Route path="/app/discovery"  component={ Discovery }/>
        <Route path="/app/portfolio"  component={ Portfolio }/>
        <Route path="/app/mine"  component={ Mine }/>
      </Switch>
      <BottomNavigation>
        {
          TabbarRoutes.map((route: ITabbarRoute) => {
            return (
              <BottomNavigationAction
              label={route.meta.title}
              icon={ <route.meta.icon /> }
              key={route.path}
              showLabel />
            )
          })
        }
      </BottomNavigation>
    </div>
  )
}
