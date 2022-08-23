import React from 'react'
import {Card, Button} from"antd"
import Header from '../component/header'
import Footer from '../component/footer'
import "./courses.css"
function Courses() {
  return (
    <>
    <Header></Header>
    <div>
      <h2>all Related courses</h2>
      <div className="site-card-border-less-wrapper">
            <div className="cards">
              <div className="card">
    <Card
      title="JS"
      bordered={false}
      style={{
        width: 300,marginTop:20,
        
      }}
      
    >
      <p>Find the right instructor for you. <br/> Choose from many topics, skill levels,<br/> and languages</p>
     
      <Button>start</Button>
    </Card>
    </div>
    <div className="card">
    <Card
      title="HTML &CSS"
      bordered={false}
      style={{
        width: 300,
        
      }}
      className="card"
    >
       <p>Find the right instructor for you. <br/> Choose from many topics, skill levels,<br/> and languages</p>
     
     <Button>start</Button>
    </Card>
    
    </div>
    <div className="card">
    <Card
      title="REACT JS"
      bordered={false}
      style={{
        width: 300,
        
      }}
      className="card"
    >
       <p>Find the right instructor for you. <br/> Choose from many topics, skill levels,<br/> and languages</p>
     
     <Button>start</Button>
    </Card>
    
    </div>
    <div className="card">
    <Card
      title="REACT JS"
      bordered={false}
      style={{
        width: 300,
        
      }}
      className="card"
    >
       <p>Find the right instructor for you. <br/> Choose from many topics, skill levels,<br/> and languages</p>
     
     <Button>start</Button>
    </Card>
    
    </div>
     <div className="card">
    <Card
      title="REACT JS"
      bordered={false}
      style={{
        width: 300,
        
      }}
      className="card"
    >
       <p>Find the right instructor for you. <br/> Choose from many topics, skill levels,<br/> and languages</p>
     
     <Button>start</Button>
    </Card>
    
    </div>
    <div className="card">
    <Card
      title="REACT JS"
      bordered={false}
      style={{
        width: 300,
        
      }}
      className="card"
    >
       <p>Find the right instructor for you. <br/> Choose from many topics, skill levels,<br/> and languages</p>
     
     <Button>start</Button>
    </Card>
    
    </div>
    </div>
  </div>
    </div>

    <Footer/>
    </>
  )
}

export default Courses
