import React from 'react'
import "./footer"
function Footer({children}) {
  return (
    <>
    <div className='footer'>
      <p style={{textAlign:"center", paddingTop:"30px", paddingBottom:"30px"}}> &copy; Alice 2022</p>
    </div>
    {children}
    </>
  )
  
}

export default Footer
