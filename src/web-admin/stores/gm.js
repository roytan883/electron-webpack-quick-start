import { message } from 'antd';
import { observable } from 'mobx';
import Bluebird from 'bluebird';

import gd from './gd'
import gs from './gs'

import EventEmitter from 'events'

class MyEmitter extends EventEmitter { }

class GM {
  constructor() {
  }
  //event bus
  eb = new MyEmitter()

  async login(userName, password) {
    gs.logining = true
    console.log("login, userName = ", userName)
    console.log("login, password = ", password)
    console.log("login, gs.logining = ", gs.logining)
    gd.userName = userName
    gd.password = password
    await Bluebird.delay(1000)
    gs.logining = false
    gs.isLogin = true
  }
}

const gm = new GM()

export default gm