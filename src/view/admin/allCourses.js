import { Table,Space,Drawer,Button } from 'antd';
import React, {useState} from 'react';
import courses from "../../constant/course.json"
import DashLayout from '../../component/dashboardLayout';

const columns = [
  {
    title: 'Course_name',
   dataIndex: 'Course_name',
    key: 'Course_name',
  },
  {
    title: 'Course-Tutor',
    dataIndex: 'Course-Tutor',
    key: 'Course-Tutor',
  },
  {
    title: 'course-duration',
    dataIndex: 'course-duration',
    key: 'course-duration',
  },
  {
    title: 'course-content',
    dataIndex: 'course-content',
    key: 'course-content',
  },
  {
    title: 'course_status',
    dataIndex: 'course_status',
    key: 'course_status',
  },
 
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>View {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];


const AllCourses = () => { 
    const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

    return(
    
<DashLayout>
<Table columns={columns} dataSource={courses} />;

<div className="site-drawer-render-in-current-wrapper">
     
      <div
        style={{
          marginTop: 16,
        }}
      >
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        getContainer={false}
        style={{
          position: 'absolute',
        }}
      >
        <p>Some contents...</p>
      </Drawer>
    </div>
  </DashLayout>
);
}
export default AllCourses;