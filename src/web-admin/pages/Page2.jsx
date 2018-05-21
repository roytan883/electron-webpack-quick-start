import React, { Component } from 'react'

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default class Page2 extends Component {
  render() {
    return (
      <Layout style={{ width: '100%', height: '100%' }}>
        <Header>Header</Header>
        <Content>Page2</Content>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}
