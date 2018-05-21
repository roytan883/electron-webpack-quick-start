import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { gm, gs } from '../stores'

import { Switch, Route, Redirect } from 'react-router'

import { Menu, Icon } from 'antd';
import { Layout } from 'antd';

import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';


const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

@observer
class NavSider extends React.Component {
  state = {
    current: 'Index',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
    if (e.key == "Index") {
      gm.goPage("/")
    }
    if (e.key == "page1") {
      gm.goPage("/page1")
    }
    if (e.key == "page2") {
      gm.goPage("/page2")
    }
  }
  render() {
    return (
      <Menu
        theme="dark"
        onClick={this.handleClick}
        // style={{ width: 256 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[this.state.current]}
        mode="inline"
      >
        <Menu.Item key="Index">
          <Icon type="pie-chart" />
          <span>Option 1</span>
        </Menu.Item>
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
          <Menu.Item key="page1">Page1</Menu.Item>
          <Menu.Item key="page2">Page2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

@observer
export default class Nav extends Component {
  render() {
    return (
      <Layout style={{ width: '100%', height: '100%' }}>
        <Sider><NavSider /></Sider>
        <Layout>
          <Content>
            <Switch>
              <Route path="/page1" component={Page1} />
              <Route path="/page2" component={Page2} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
