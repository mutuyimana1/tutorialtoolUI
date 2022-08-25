import React, {useState} from 'react'
import {Card, Button, Drawer} from"antd"
import Header from '../component/header'
import Footer from '../component/footer'
import ClassesServices from "../constant/class"
import SingleClasse from './singleClass';
// import "./courses.css"
function Classes() {
    const [visible, setVisible] = useState(false);
    const [visibleDrawer, setVisibleDrawer] = useState(false);
const [selectedClasses, setSelectedClasses]=useState()
const [selectedCourse, setSelectedCourse]=useState()
    // const showDrawer = () => {
    //   setVisible(true);
    // };
  
    // const onClose = () => {
    //   setVisible(false);
    // };
  return (
    <>
    <Header></Header>
    <div>

      <h2>all classes we have for you</h2>
      <div className="site-card-border-less-wrapper">
            <div className="cards">
            {ClassesServices.map((classe)=>(
              <div className="card">
    <Card
      title={classe.Class_name}
      bordered={false}
      style={{
        width: 300,
      
        
      }}
      
    >
      <p>{classe.class_discription}</p>
      <p> Teacher: {classe.Tutor}</p>
      <Button onClick={()=>{setVisible(true);setSelectedClasses(classe)}}>start</Button>
    </Card>
    </div>
     ))}
   
    </div>
    
  </div>
    </div>
    <div className="site-drawer-render-in-current-wrapper">
     
      <Drawer
        title="All courses"
        width="90%"
        placement="right"
        closable={false}
        visible={visible}
          onClose={() => setVisible(false)}
        getContainer={false}
        style={{
          position: 'absolute',
          height:600,
        }}
      >
        {/* <h3>jhbyvg</h3> */}
         <SingleClasse data={selectedClasses} />
      </Drawer>
    </div>
    <Footer/>
    </>
  )
}

export default Classes
