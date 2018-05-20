import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'

import { Helmet } from "react-helmet";

import { observable, action } from "mobx";
import { observer } from 'mobx-react'

import { gd, gm, gs } from './stores'

import PrivateRoute from './components/PrivateRoute.jsx'

import Login from './pages/Login.jsx'
import Nav from './pages/Nav.jsx'

@observer
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>

        {/* <Route path='/' component={CheckLogin} /> */}
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/nav" component={Nav} />
          <Route path="/" render={() => (
            gs.isLogin ? <Redirect to="/login" /> : <Redirect to="/nav" />
             )} />
        </Switch>        
      </BrowserRouter>
    )
  }
}
