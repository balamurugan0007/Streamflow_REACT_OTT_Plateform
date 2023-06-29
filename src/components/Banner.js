import React from 'react'
import Navbar from "./navbar/Navbar"

import "./Home.css"
const Banner = () => {
  return (
    
    <div className='container-fluid' id='banner-container' >
        <Navbar id='navbar'/>
       
       
        
        <div className='container'  >
        <h2 className='text-start mx-4 col-sm-5 my-4'>Watch your Favourite Movies on <span>Streamflow</span></h2>
         <button className='btn btn-outline-warning mx-4 my-3'>Watch now</button>
        </div>
       
    
    </div>
  )
}

export default Banner
