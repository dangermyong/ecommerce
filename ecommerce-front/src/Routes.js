import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './core/Home'
import Menu from './core/Menu'
import PrivateRoute from './auth/PrivateRoute'
import Dashboard from './user/UserDashboard'

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/' component={Home} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Routes