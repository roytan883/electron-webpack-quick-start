import React, { Component } from 'react'

import { Helmet } from "react-helmet";

import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Helmet>

        Web: hello world
        <br />
        <h1 className="h1-my">ABCD</h1>
        <br />
        <Button variant="raised" color="primary">
          Web
        </Button>
        <IconButton color="secondary" component="span">
          <PhotoCamera />
        </IconButton>
      </div>
    )
  }
}
