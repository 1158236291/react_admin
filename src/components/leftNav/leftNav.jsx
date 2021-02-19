import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
import "./leftNav.less";
import logo from "../../assets/images/logo.png";
import menuList from "../../config/menuconfig.js";
const { SubMenu } = Menu;
class leftNav extends Component {
  getMenuNodes = (menuList) => {
    const path = this.props.location.pathname
    return menuList.map((item) => {
      if (!item.children) {
        return (
          <Menu.Item key={item.key} >
            <Link to={item.key}>{item.title}</Link>
          </Menu.Item>
        );
      } else {
        if(item.children.find(cItem => path.indexOf(cItem.key)===0)) { this.openKey = item.key }
        return (
          <SubMenu key={item.key}  title={item.title}>
            {this.getMenuNodes(item.children)}
          </SubMenu>
        );
      }
    });
  };
  // 在第一次render()之前执行
  componentWillMount(){

    this.menuNodes = this.getMenuNodes(menuList)
  }

  render() {
    const selectKey = this.props.location.pathname;
    const openKey = this.openKey
    return (
      <div className="left-nav">
        <Link to="/" className="left-nav-header">
          <img src={logo} alt="logo" />
          <h1>硅谷后台</h1>
        </Link>
        <Menu
          selectedKeys={[selectKey]}
          defaultOpenKeys={[openKey]}
          mode="inline"
          theme="dark"
        >
          {this.menuNodes}
        </Menu>
      </div>
    );
  }
}

export default withRouter(leftNav);
