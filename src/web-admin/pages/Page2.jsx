import React, { Component } from 'react'

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default class Page2 extends Component {
  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Content>Page2</Content>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}
