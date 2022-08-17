import React from 'react';
import "./home.css"
import logo from "../images/logo.jpg"

function Home() {
  return (
    <div className='home-content'>
      <div className='header'>
        <div className='logo' >
            <img src={logo} />
        </div>
        <div className='navbar'>
        <nav>Home</nav>
        <nav>Courses</nav>
        <nav>Classes</nav>
          <nav>Login</nav>

        </div>

      </div>

      <div className='home-body'>
        <div className='content'>
        <h1>OWN YOUR FUTURE BY</h1><h4>LEARNING NEW SKILLS</h4>

        <div className='button'>
            <button>View all courses</button> <button>SignUp Now</button>

        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home;
