import { Table } from 'antd';
import React from 'react';
import users from "../../constant/user.json"
import DashLayout from '../../component/dashboardLayout';
const columns = [
  {
    title: 'Names',
    dataIndex: 'Names',
    key: 'Names',
  },
  {
    title: 'phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Class_name',
    dataIndex: 'Class_name',
    key: 'Class_name',
  },
  {
    title: 'role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
  
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
  },
];


const AllUsers = () => (
  <DashLayout>
  <Table columns={columns} dataSource={users} />;
  </DashLayout>
);

export default AllUsers;