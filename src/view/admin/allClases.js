import { Button, Table,Dropdown, Menu, Space,Modal } from 'antd';
import React, {useState} from 'react';
import classes from "../../constant/class.json"
import DashLayout from '../../component/dashboardLayout';
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="/addtoclass">
            Student
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="/addtoclass">
            Tutor
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="/add/course">
            Courses
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
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a><Space direction="vertical">
    <Space wrap>
      <Dropdown overlay={menu} placement="bottom">
        <Button style={{margin:"20px"}}>Add</Button>
      </Dropdown>
      
    </Space>
  </Space></a>
        <a>Delete</a>
      </Space>
    ),
  },
  
];


const AllClasses = () =>{

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
return(
<DashLayout> 

  
  <Table columns={columns} dataSource={classes} />;
  <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
</DashLayout>
)
}
export default AllClasses;