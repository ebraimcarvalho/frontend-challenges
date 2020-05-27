import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/Login'
import Create from './pages/Create'
import Main from './pages/Main'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/main" component={Main} />
    </Switch>
  </BrowserRouter>
)

export default Routes