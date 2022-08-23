import React from "react";
import { Carousel } from "antd";

const SingleCourse = ({ data }) => {
  return (
    <>
      <div className="single-class">
        <h3 className="" style={{ fontSize: "18px", fontWeight: "bold" }}>
          Course Name: <span style={{ color: "blue" }}>{data.course_content}</span>
        </h3>
        <div className="">
          <h4 className="" style={{ fontSize: "16px", fontWeight: "bold" }}>
            Course Title:<span style={{ color: "blue" }}>{data.Course_Tutor}</span>
          </h4>
          
          <h4 className="" style={{ fontSize: "16px", fontWeight: "bold" }}>
            Duration: <span style={{ color: "blue" }}>{data.course_duration}</span>
          </h4>
          <h4 className="" style={{ fontSize: "16px", fontWeight: "bold" }}>
            course_content: <span style={{ color: "blue" }}>{data.course_content}</span>
          </h4>
          
        </div>
      </div>
    </>
  );
};
export default SingleCourse;
