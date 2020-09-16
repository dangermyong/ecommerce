import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './core/Home'
import Menu from './core/Menu'
import PrivateRoute from './auth/PrivateRoute'
import AdminRoute from './auth/AdminRoute'
import Dashboard from './user/UserDashboard'
import AdminDashboard from './user/AdminDashboard'

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/' component={Home} />
          <PrivateRoute exact path='/user/dashboard' component={Dashboard} />
          <AdminRoute exact path='/admin/dashboard' component={AdminDashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Routes