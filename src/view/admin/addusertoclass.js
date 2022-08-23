import { Button, Form, Input, Select } from 'antd';
import React from 'react';
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
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */
const { Option } = Select;
const Add = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (

    <div style={{margin:"10rem", background:"gray", height:"60vh", padding:"50px"}}>
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} >
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="gender"
        label="gender"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please select your gender!',
          },
        ]}
      >
        <Select placeholder="Please select gender">
          <Option value="female">female</Option>
          <Option value="male">male</Option>
        </Select>
      </Form.Item>
      
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" href='/dashboard'>
          Send
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Add;