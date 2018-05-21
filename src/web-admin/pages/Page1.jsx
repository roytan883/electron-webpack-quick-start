import React, { Component } from 'react'

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default class Page1 extends Component {
  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Content>Page1</Content>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}
