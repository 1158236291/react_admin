import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.less";
import logo from "./images/bg.jpg";
export default class login extends Component {
  render() {
    const onFinish = (values) => {
      console.log("onFinish",values);
      
        
      
    };

    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>React项目: 后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登陆</h2>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
                {
                  min:4,

                 message: "必须大于等于 4 位",
                },
                {
                  max:12,

                 message: "必须小于等于 12 位",
                },
                {
                  pattern:/^([A-Z]|[a-z]|[\d])*$/,

                 message: "必须是英文、数字或下划线组成",
                },

              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
                {
                  min:4,

                 message: "必须大于等于 4 位",
                },
                {
                  max:12,

                 message: "必须小于等于 12 位",
                },
                {
                  pattern:/^([A-Z]|[a-z]|[\d])*$/,

                 message: "必须是英文、数字或下划线组成",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
           

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}
