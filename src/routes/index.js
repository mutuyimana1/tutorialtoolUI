import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "../view/home";
import DashboardLayout from "../component/dashboardLayout";
import AllUsers from "../view/admin/allUsers";
import AllClasses from "../view/admin/allClases";
import CreateUser from "../view/admin/createUser";
import CreateClass from "../view/admin/addClass";
import AllCourses from "../view/admin/allCourses";
const Index=()=>{
    return(
        <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/dashboard" element={<DashboardLayout/>}/>
      <Route path="/admin/classes" element={<AllClasses/>}/>
      <Route path="/admin/users" element={<AllUsers/>}/>
      <Route path="/admin/create/user" element={<CreateUser/>}/>
      <Route path="/admin/create/class" element={<CreateClass/>}/>
      <Route path="/admin/courses" element={<AllCourses/>}/>
        </Routes>
    )
}

export default Index;