import React, { Component } from 'react'

import { Helmet } from "react-helmet";

import img1 from './static/favicon.png'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <link rel="icon" href={img1} type="image/x-icon" />
        </Helmet>
        Web-admin: hello world
        <br />
        <h1 className="h1-my">ABCDE</h1>
        <br />
        <img src={img1} />
      </div>
    )
  }
}
