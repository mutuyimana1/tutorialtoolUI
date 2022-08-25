import React from "react";
import { Carousel, Button, Card } from "antd";
// import "./courses.css"
const CourseContent = ({ data }) => {
  return (
    <>

<div className="single-class" style={{display:"flex"}}>{data.courses.map((course)=>(
      <>
       <div className="site-card-border-less-wrapper">
            <div className="cards" >
            
              <div className="card" >
      <Card
      
      bordered={false}
      style={{
        width: 300,
        
      }}
      
    >
      <p>{course.course_name}</p>
      <p>{course.course_content}</p>
      <Button >finish</Button>
    </Card>
     
       </div>

       </div></div> 
        
      </>
 
          ))}
       
      
      </div>
    </>
  );
};
export default CourseContent;
