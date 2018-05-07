import React, { Component } from 'react'
import { Helmet } from "react-helmet";

import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import { Button as BtnA, Icon } from 'antd-mobile';

export default class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Helmet>

        hello world 1
        <BtnA type="primary" size="small" inline> Click </BtnA>
        <Icon type="search" size="lg" />
        <Button variant="raised" color="primary">
          M
        </Button>
        <IconButton color="secondary" component="span">
          <PhotoCamera />
        </IconButton>
      </div>
    )
  }
}
