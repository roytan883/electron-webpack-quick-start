import React, { Component } from 'react'

import { Button, Icon } from 'antd-mobile';

export default class App extends Component {
  render() {
    return (
      <div>
        hello world
        <Button type="primary" size="small" inline> Click </Button>
        <Icon type="search" size="lg" />
      </div>
    )
  }
}
