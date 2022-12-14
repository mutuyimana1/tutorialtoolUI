import React, { useState } from "react";
import "./home.css";
import logo from "../images/logo.jpg";
import Header from "../component/header";
import { Button, Modal, Checkbox, Form, Input, InputNumber,Card } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Forms from "../component/form";
import Footer from "../component/footer";
import Classes from "../constant/class"
function Home() {
 

  const [isSignUpVisible, setIsSignUpVisible] = useState(false);

  const showSignUp = () => {
    setIsSignUpVisible(true);
  };

  const signUpOk = () => {
    setIsSignUpVisible(false);
  };

  const signUpCancel = () => {
    setIsSignUpVisible(false);
  };

 
  const onSignUpFinish = (values) => {
    console.log(values);
  };
  return (
    <>
    < Header/>
      

      <Modal
        title="SignUp Form"
        visible={isSignUpVisible}
        onOk={signUpOk}
        onCancel={signUpCancel}
        footer={null}
      >
      <Forms></Forms>
      </Modal>
      <div className="home-content">
  <div className="home-body">
          <div className="content">
            <h1 style={{marginLeft:"300px"}}>OWN YOUR FUTURE BY</h1>
            <h4 style={{color:'white'}}>LEARNING NEW SKILLS</h4>

            <div className="button">
            <a href="/courses" style={{color:"black"}}> <button >View all courses</button>{" "}</a> 
              <button onClick={showSignUp}>SignUp Now</button>
            </div>
          </div>

          <div className="site-card-border-less-wrapper">
          
            <div className="cards">
            {Classes.map((classe)=>(
              <div className="card">
    <Card
      title={classe.Class_name}
      bordered={false}
      style={{
        width: 300,
        
      }}
      
    >
      <p>{classe.class_discription}</p>
      <b>Created by <i style={{color:"gray"}}> {classe.Tutor}</i></b> <br/><br/>
     
      <a href="/classes" ><Button  >View class Courses</Button></a>
    </Card>
    </div>
     ))}
   
    </div>
    
  </div>
  
        </div>
      </div>
    <Footer/>
    </>
  );
}

export default Home;
