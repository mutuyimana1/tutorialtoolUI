import { Button, Form, Input, InputNumber } from 'antd';
import React from 'react';
import DashLayout from '../../component/dashboardLayout';
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

const CreateClass = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <DashLayout>
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'Class_name']}
        label="Class_name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'Tutor']}
        label="Tutor"
        rules={[
          {
            type: 'String',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'Courses']}
        label="Courses"
        rules={[
          {
            type: 'String',
            min: 0,
            max: 99,
          },
        ]}
      >
        <Input/>
      
        <Button type="primary" htmlType="submit" style={{marginTop:"30px"}}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </DashLayout>
  );
};

export default CreateClass;