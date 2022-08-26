import React from "react";
import { Carousel, Button, Card } from "antd";
// import "./courses.css"
const CourseContent = ({ data }) => {
  return <p>{data?.course_content}</p>;
};
export default CourseContent;
