import React from 'react';
import {Switch, Route} from 'react-router-dom' ;

import Home from './pages/Home';
import Reservation from './pages/Reservation'

function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/reservations" component={Reservation} />
    </Switch>
  )
}

export default Routes