import React from 'react'
import {Card, Button} from"antd"
import Header from '../component/header'
import Footer from '../component/footer'
import CoursesServices from "../constant/course"
import "./courses.css"
function Courses() {
  return (
    <>
    <Header></Header>
    <div>
      <h2>all Related courses</h2>
      <div className="site-card-border-less-wrapper">
            <div className="cards">
            {CoursesServices.map((course)=>(
              <div className="card">
    <Card
      title={course.Course_name}
      bordered={false}
      style={{
        width: 300,
        
      }}
      
    >
      <p>{course.course_content}</p>
     
      <Button>start</Button>
    </Card>
    </div>
     ))}
   
    </div>
    
  </div>
    </div>

    <Footer/>
    </>
  )
}

export default Courses
