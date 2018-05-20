import React, { Component } from 'react'

import { Helmet } from "react-helmet";

import { observable, action } from "mobx";
import { observer } from 'mobx-react'

import img1 from './static/favicon.png'

import './App.css'

class TempMobx {
  @observable num = 0;
  @action async start() {
    setInterval(() => {
      this.num = Math.random()
    }, 1000)
  }
}


@observer
export default class App extends Component {

  constructor(props) {
    super(props)
    this.tempMobx = new TempMobx()
    this.tempMobx.start()
  }

  render() {
    return (
      <div>
        <Helmet>
          <link rel="icon" href={img1} type="image/x-icon" />
        </Helmet>
        Web-admin: hello world
        <br />
        <h1 className="h1-my">ABCDE = {this.tempMobx.num}</h1>
        <br />
        <img src={img1} />
      </div>
    )
  }
}
