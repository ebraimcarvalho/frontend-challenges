import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Main/index'
import Product from './pages/Products/index'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/products/:id' component={Product} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes