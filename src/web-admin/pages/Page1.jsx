import React, { Component } from 'react'

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default class Page1 extends Component {
  render() {
    return (
      <Layout style={{ width: '100%', height: '100%' }}>
        <Header>Header</Header>
        <Content>Page1</Content>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}
