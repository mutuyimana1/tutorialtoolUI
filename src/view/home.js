import React, { useState } from "react";
import "./home.css";
import logo from "../images/logo.jpg";
import { Button, Modal, Checkbox, Form, Input, InputNumber } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [isSignUpVisible, setIsSignUpVisible] = useState(false);

  const showSignUp = () => {
    setIsSignUpVisible(true);
  };

  const signUpOk = () => {
    setIsSignUpVisible(false);
  };

  const signUpCancel = () => {
    setIsSignUpVisible(false);
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  /* eslint-disable no-template-curly-in-string */

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const onSignUpFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <Modal
        title="Login Form"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
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
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="SignUp Form"
        visible={isSignUpVisible}
        onOk={signUpOk}
        onCancel={signUpCancel}
        footer={null}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onSignUpFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "names"]}
            label="Names"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[
              {
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["user", "password"]} label="password">
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "phone"]}
            label="phone"
>
            <Input/>
          </Form.Item>
          <Form.Item name={["user", "gender"]} label="gender">
            <Input />
          </Form.Item>
          
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <div className="home-content">
        <div className="header">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="navbar">
            <nav>
              <a style={{ color: "white" }}>Home</a>
            </nav>
            <nav>
              <a style={{ color: "white" }}>courses</a>
            </nav>
            <nav>
              <a style={{ color: "white" }}>Classes</a>
            </nav>
            <nav>
              {" "}
              <a onClick={showModal} style={{ color: "white" }}>
                Login
              </a>
            </nav>
          </div>
        </div>

        <div className="home-body">
          <div className="content">
            <h1>OWN YOUR FUTURE BY</h1>
            <h4>LEARNING NEW SKILLS</h4>

            <div className="button">
              <button>View all courses</button>{" "}
              <button onClick={showSignUp}>SignUp Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
