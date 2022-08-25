import { Table,Space,Drawer,Button } from 'antd';
import React, {useState} from 'react';
import courses from "../../constant/course.json"
import DashLayout from '../../component/dashboardLayout';
import SingleCourse from './singlecourse';
const AllCourses = (data) => { 
const columns = [
  {
    title: 'Course_name',
   dataIndex: 'Course_name',
    key: 'Course_name',
  },
  {
    title: 'course_tutor',
    dataIndex: 'course_tutor',
    key: 'course_tutor',
  },
  {
    title: 'course_duration',
    dataIndex: 'course_duration',
    key: 'course_duration',
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
        <a  onClick={() => {
              showDrawer(true);
              setSelectedCourse(record);
            }}>View </a>
        <a>Enable</a>
      </Space>
    ),
  },
];



    const [visible, setVisible] = useState(false);
    const [selectedCourse, setSelectedCourse]=useState({})

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
         <SingleCourse data={selectedCourse} />
      </Drawer>
    </div>
  </DashLayout>
);
}
export default AllCourses;