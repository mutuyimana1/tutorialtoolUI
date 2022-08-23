import React , {useState} from 'react'
import logo from "../images/logo.jpg";
import { Button ,Checkbox,Form,Input,Modal} from 'antd';
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Forms from './form';
import "./headr.css"
function Header({children}) {

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
  const onSignUpFinish = (values) => {
    console.log(values);
  };
  return (
    <>
<Modal
        title="SignUp Form"
        visible={isSignUpVisible}
        onOk={signUpOk}
        onCancel={signUpCancel}
        footer={null}
      >
      <Forms></Forms>
      </Modal>

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
              href="/dashboard"
            >
              Log in
            </Button>
            Or{" "}
            <Button onClick={showSignUp}>
              <a>register now!</a>
            </Button>
          </Form.Item>
        </Form>
      </Modal>
  
    <div className="header">
    <div className="logo">
      <img src={logo} />
    </div>
    <div className="navbar">
      <nav>
        <a style={{ color: "white" }} href="/">Home</a>
      </nav>
      <nav>
        <a style={{ color: "white" }} href="/courses">courses</a>
      </nav>
      <nav>
        <a style={{ color: "white" }} href="/classes">Classes</a>
      </nav>
      <nav>
        {" "}
        <a onClick={showModal} style={{ color: "white" }}>
          Login
        </a>
      </nav>
    </div>
  </div>
  {children}
  </>
  )
}

export default Header
