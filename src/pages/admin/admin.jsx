import React, { Component } from "react";
import { Redirect, Switch,Route } from "react-router-dom";
import { Layout } from "antd";

import memoryUtils from "../../utils/memoryUtils";
import Header from "../../components/header/header";
import LeftNav from "../../components/leftNav/leftNav";
import Home from '../home/home'
import Category from '../category/category'
import Role from '../role/role'
import Product from '../product/product'
import User from '../user/user'
import Line from '../charts/line'
import Pie from '../charts/pie'
import Bar from '../charts/bar'


const { Footer, Sider, Content } = Layout;
export default class admin extends Component {
  render() {
    const user = memoryUtils.user;

    if (!user._id) {
      return <Redirect to="/login"></Redirect>;
    }
    return (
      <Layout style={{ height: "100%" }}>
        <Sider>
          <LeftNav />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content style={{ margin: 20,backgroundColor: "white" }}>
            <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/category' component={Category}></Route>
            <Route path='/role' component={Role}></Route>
            <Route path='/product' component={Product}></Route>
            <Route path='/user' component={User}></Route>
            <Route path='/charts/line' component={Line}></Route>
            <Route path='/charts/pie' component={Pie}></Route>
            <Route path='/charts/bar' component={Bar}></Route>
            <Redirect to='/home'></Redirect>
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center", color: "#aaaaaa" }}>
            推荐使用谷歌浏览器， 可以获得更佳页面操作体验
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
