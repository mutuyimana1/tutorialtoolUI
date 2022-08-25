import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "../view/home";
import DashboardLayout from "../component/dashboardLayout";
import AllUsers from "../view/admin/allUsers";
import AllClasses from "../view/admin/allClases";
import CreateUser from "../view/admin/createUser";
import CreateClass from "../view/admin/addClass";
import AllCourses from "../view/admin/allCourses";
import Add from "../view/admin/addusertoclass";
import AddCourses from "../view/admin/createcoure";
import Courses from "../view/courses";
import Classes from "../view/classes";
import Header from "../component/header";
import Forms from "../component/form";

import { Form } from "antd";
const Index=()=>{
    return(
        <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/dashboard" element={<DashboardLayout/>}/>
      <Route path="/form" element={<Forms/>}/>
      <Route path="/admin/classes" element={<AllClasses/>}/>
      <Route path="/admin/users" element={<AllUsers/>}/>
      <Route path="/admin/create/user" element={<CreateUser/>}/>
      <Route path="/admin/create/class" element={<CreateClass/>}/>
      <Route path="/admin/courses" element={<AllCourses/>}/>
      <Route path="/addtoclass" element={<Add/>}/>
      <Route path="/add/course" element={<AddCourses/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/classes" element={<Classes/>}/>
      <Route path="/header" element={<Header/>}/>
        </Routes>
    )
}

export default Index;