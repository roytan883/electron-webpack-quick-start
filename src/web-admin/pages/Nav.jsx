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
    switch (e.key) {
      case "index": gm.goPage("/"); break;
      case "page1": gm.goPage("/page1"); break;
      case "page2": gm.goPage("/page2"); break;

      default:
        break;
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
        <Menu.Item key="index">
          <Icon type="pie-chart" />
          <span>首页</span>
        </Menu.Item>
        <SubMenu key="User" title={<span><Icon type="mail" /><span>用户管理</span></span>}>
          <Menu.Item key="UserAdmin">管理员</Menu.Item>
          <Menu.Item key="UserNormal">用户</Menu.Item>
        </SubMenu>
        <SubMenu key="Day" title={<span><Icon type="appstore" /><span>每日挑战</span></span>}>
          <Menu.Item key="DaySetting">设置</Menu.Item>
          <Menu.Item key="DayText">正文</Menu.Item>
          <SubMenu key="DayExamLib" title="每日题库">
            <Menu.Item key="7">乘务员</Menu.Item>
            <Menu.Item key="8">机长</Menu.Item>
            <Menu.Item key="8234">机车副司机</Menu.Item>
          </SubMenu>
          <Menu.Item key="DayResult`">统计/导出</Menu.Item>
        </SubMenu>
        <SubMenu key="Day2" title={<span><Icon type="appstore" /><span>全员对战</span></span>}>
          <Menu.Item key="DaySetting2">设置</Menu.Item>
          <Menu.Item key="DayText2">正文</Menu.Item>
          <SubMenu key="DayExamLib2" title="全员题库">
            <Menu.Item key="72">乘务员</Menu.Item>
            <Menu.Item key="82">机长</Menu.Item>
            <Menu.Item key="82342">机车副司机</Menu.Item>
          </SubMenu>
          <Menu.Item key="DayResult2`">统计/导出</Menu.Item>
        </SubMenu>
        <SubMenu key="Day3" title={<span><Icon type="appstore" /><span>好友对战</span></span>}>
          <Menu.Item key="DaySetting3">设置</Menu.Item>
          <Menu.Item key="DayText3">正文</Menu.Item>
          <SubMenu key="DayExamLib3" title="好友题库">
            <Menu.Item key="73">乘务员</Menu.Item>
            <Menu.Item key="83">机长</Menu.Item>
            <Menu.Item key="82343">机车副司机</Menu.Item>
          </SubMenu>
          <Menu.Item key="DayResult3`">统计/导出</Menu.Item>
        </SubMenu>
        <SubMenu key="fasdf" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
          <SubMenu key="sub3" title="每日题库">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
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
