import React, { useState } from "react";
import "./dashboard.css";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  ContainerOutlined,
  AppstoreOutlined, MailOutlined, SettingOutlined
} from "@ant-design/icons";
const { SubMenu } = Menu;

function handleClick(e) {
  console.log("click", e);
}


const { Header, Sider, Content } = Layout;

const DashLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{background:"#CE8A4B"}}>
      <div className="logos" />
       
        <Menu
              onClick={handleClick}
              style={{ width: 206, backgroundColor: "transparent" }}
              mode="vertical"
            >
              <a href="/dashboard" className="homeLink" style={{color:"white"}}>
                <i className="fa fa-home"></i> Dashboard
              </a>
              <SubMenu
                key="sub1"
                icon={<AppstoreOutlined />}
                title="Manage Users"
                style={{ color: "white", marginTop:"3rem" }}
              >
                <a href="/create/user">
                  {" "}
                  <Menu.Item key="5">Add User</Menu.Item>
                </a>
                <a href="/admin/users">
                  {" "}
                  <Menu.Item key="6"> All users</Menu.Item>
                </a>
              </SubMenu>
              <SubMenu
                key="sub2"
                icon={<ContainerOutlined />}
                title="Class managment"
                style={{ color: "white" }}
              >
                <a href="/admin/create/class" style={{ color: "black" }}>
                  {" "}
                  <Menu.Item key="9">Add class</Menu.Item>
                </a>
                <a href="/admin/classes">
                  {" "}
                  <Menu.Item key="10"> class list</Menu.Item>
                </a>
              </SubMenu>
              <SubMenu
                key="sub3"
                icon={<ContainerOutlined />}
                title="Courses management"
                style={{ color: "white" }}
              >
                <a href="/admin/create/course">
                  {" "}
                  <Menu.Item key="9">Add course</Menu.Item>
                </a>
                <a href="/admin/courses">
                  {" "}
                  <Menu.Item key="10">Available courses</Menu.Item>
                </a>
              </SubMenu>
              
              <Link to="/" style={{color:"white"}}>Logout</Link>
            </Menu>


      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, background:"#CE8A4B" }}>
          
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default DashLayout;
