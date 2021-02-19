import React, { Component } from "react";
import { message, Modal } from "antd";
import { withRouter } from "react-router-dom";
import LinkButton from "../link-button/index"
import { formateDate } from "../../utils/dateUtils.js";
import menuList from "../../config/menuconfig.js";
import storageUtils from "../../utils/storageUtils";
import memoryUtils from "../../utils/memoryUtils";
import { reqWeather } from "../../api/index";
import "./header.less";
class header extends Component {
  state = {
    currentTime: formateDate(Date.now()),
    currentCity: "",
    currentWeather: "",
  };

  logout = () => {
    Modal.confirm({
      content: "确定退出吗?",
      onOk: () => {
        console.log("OK");
        // 移除保存的 user
        storageUtils.removeUser();
        memoryUtils.user = {};
        // 跳转到 login
        this.props.history.replace("/login");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  getCurrentTime() {
    this.intervalId = setInterval(() => {
      let currentTime = formateDate(Date.now());
      this.setState({
        currentTime,
      });
    }, 1000);
  }

  getTitle = (path) => {
    let title;
    menuList.forEach((menu) => {
      if (menu.key === path) {
        title = menu.title;
      } else if (menu.children) {
        menu.children.forEach((item) => {
          if (path.indexOf(item.key) === 0) {
            title = item.title;
          }
        });
      }
    });
    return title;
  };

  componentDidMount() {
    this.getCurrentTime();
    reqWeather(101200101)
      .then((response) => {
        console.log("111", response);
        this.setState({
          currentWeather: response.weatherinfo.city,
          currentCity: response.weatherinfo.WD,
        });
      })
      .catch((error) => {
        message.error(`请求错误` + error.msg);
      });
  }

  componentWillUnmount() {
    // 清除定时器
    clearInterval(this.intervalId);
  }

  render() {
    const { currentCity, currentWeather } = this.state;
    const path = this.props.location.pathname;
    const { username } = memoryUtils.user;
    const title = this.getTitle(path);
    return (
      <div className="header">
        <div className="header-top">
          <span>欢迎, {username}</span>
          <LinkButton onClick={this.logout}>退出</LinkButton>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">{title}</div>
          <div className="header-bottom-right">
            <span>{this.state.currentTime}</span>
            <span style={{ margin: 10 }}>{currentCity}</span>
            <span>{currentWeather}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(header);
