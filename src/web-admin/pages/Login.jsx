import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Switch, Route, Redirect } from 'react-router'

import { Button } from 'antd';

import img1 from '../static/favicon.png'

import { gs, gd, gm } from '../stores'

@observer
export default class Login extends Component {
  render() {
    return (
      gs.isLogin ? <Redirect to="/" /> :
        <div>
          Web-admin: hello world
        <br />
          <h1>ABCDE</h1>
          <br />
          <Button
            type="primary"
            loading={gs.logining}
            onClick={() => {
              gm.login("aaa", "bbb")
            }}>Login</Button>
          <br />
          <img src={img1} />
        </div>
    )
  }
}
