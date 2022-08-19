import { Button, Table,Dropdown, Menu, Space } from 'antd';
import React from 'react';
import classes from "../../constant/class.json"
import DashLayout from '../../component/dashboardLayout';
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            Student
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            Tutor
          </a>
        ),
      },
      
    ]}
  />
);
const columns = [
  {
    title: 'Class_name', 
    dataIndex: 'Class_name',
    key: 'Class_name',
    render: (text) => <a>{text}</a>,
    width: 150,
  },
  {
    title: 'Tutor',
    dataIndex: 'Tutor',
    key: 'Tutor',
    width: 80,
  },
  {
    title: 'Students',
    dataIndex: 'Students',
    key: 'Students',
    ellipsis: true,
  },
  {
    title: 'courses',
    dataIndex: 'courses',
    key: 'courses',
    ellipsis: true,
  },
  
];


const AllClasses = () =><DashLayout> 
  <Space direction="vertical">
    <Space wrap>
      <Dropdown overlay={menu} placement="bottom">
        <Button style={{margin:"20px"}}>Add</Button>
      </Dropdown>
      
    </Space>
  </Space>
  
  <Table columns={columns} dataSource={classes} />;
</DashLayout>
export default AllClasses;