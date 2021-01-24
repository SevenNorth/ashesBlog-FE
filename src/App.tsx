import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/home';
import Discovery from './pages/discovery';
import Portfolio from './pages/portfolio';
import Mine from './pages/mine';
import Tabbar from './components/tabbar'

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%"
      }}
    >
      <div style={{ flex: 1, height: "100%", overflowY:"auto"}}>
        <Switch>
          <Route path="/app/home" component={Home} />
          <Route path="/app/discovery" component={Discovery} />
          <Route path="/app/portfolio" component={Portfolio} />
          <Route path="/app/mine" component={Mine} />
        </Switch>
      </div>
      <Tabbar />
    </div>
  )
}
