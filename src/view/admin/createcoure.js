import { Button, Form, Input, InputNumber } from 'antd';
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

const AddCourses = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} style={{margin:"8rem"}}>
      <Form.Item
        name={['user', 'Course_name']}
        label="Course_name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'Course_duration']}
        label="Course_duration"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={['user', 'Course_content']}
        label="Course_content"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
          <Input.TextArea />
      </Form.Item>
      
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" href='/admin/classes'>
          Send
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddCourses;