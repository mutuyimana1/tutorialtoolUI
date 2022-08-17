import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "../view/home";
import DashboardLayout from "../component/dashboardLayout";
const Index=()=>{
    return(
        <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/dashboard" element={<DashboardLayout/>}/>
        </Routes>
    )
}

export default Index;