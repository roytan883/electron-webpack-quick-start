import React, { Component } from 'react'
// import { Router } from 'react-router-dom'
import { Router, Switch, Route, Redirect } from 'react-router'

import { Helmet } from "react-helmet";

import { observable, action } from "mobx";
import { observer } from 'mobx-react'

import createHistory from "history/createBrowserHistory"

import { gd, gm, gs } from './stores'

import PrivateRoute from './components/PrivateRoute.jsx'

import Login from './pages/Login.jsx'
import Nav from './pages/Nav.jsx'

const history = createHistory()

gm.setHistory(history)

@observer
export default class App extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Router history={history}>
          {/* <Route path='/' component={CheckLogin} /> */}
          <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute path="/" component={Nav} />
            {/* <PrivateRoute exact path="/nav" component={Nav} />
            <Route path="/" render={() => (
              gs.isLogin ? <Redirect to="/login" /> : <Redirect to="/nav" />
            )} /> */}
          </Switch>
        </Router>
      </div>
    )
  }
}
