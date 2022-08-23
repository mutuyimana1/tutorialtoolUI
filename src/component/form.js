import React from 'react'
import { Button, Modal, Checkbox, Form, Input, InputNumber,Card } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
function Forms() {

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

    
    <div>
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
          <Form.Item name={["user", "phone"]} label="phone">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "gender"]} label="gender">
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit" href='/' >
              Submit
            </Button>
          </Form.Item>
        </Form>
    </div>
  )
}

export default Forms
