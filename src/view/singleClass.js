import React, { useState } from "react";
import { Carousel, Button, Card, Drawer } from "antd";
import CourseContent from "./classCourse";
import "./courses.css";
const SingleClasse = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const [singleContent, setSingleContent] = useState({});

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
  
      <div className="single-class" style={{ display: "flex" }}>
        {data?.courses?.map((course) => (
          <>
            <div className="site-card-border-less-wrapper">
              <div className="cards">
                <div className="card">
                  <Card
                    bordered={false}
                    style={{
                      width: 300,
                    }}
                  >
                    <p>{course.course_name}</p>
                    <p>{course.course_content}</p>
                    <Button
                      onClick={() => {
                        showDrawer(true);
                        setSingleContent(course);
                      }}
                    >
                      start
                    </Button>
                  </Card>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <CourseContent data={singleContent} />
      </Drawer>
    </>
  );
};
export default SingleClasse;
