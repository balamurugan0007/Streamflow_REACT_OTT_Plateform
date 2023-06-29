import React from 'react'
import "./navbar.css"
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {
  return (
    <div className='container mt-4'>
        <div className='navbar d-flex' id='navbar'>

        


            <div className='navbar-brand d-flex'>
            <div class="dropdown">
  <a class="btn dropdown-toggle mx-4" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    <GiHamburgerMenu/>
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item"  href="/">Home</a></li>
    <li><a class="dropdown-item" href="streamflow_movies">Movies</a></li>
    <li><a class="dropdown-item" href="prmium_movies&Tv&Webseries">Primium</a></li>
    <li><a class="dropdown-item" href="prmium_movies&Tv&Webseries">About</a></li>
  </ul>
</div>
               <span>Stream</span>Flow
            </div>
            <div className='navbar-list-div' id='navbar-list'>
            <ul className='navbar-list d-flex' >
            <a className='mx-4' href='/'>Home</a>
               <a className='mx-4' href='streamflow_movies'>Movies</a> 
             <a className='mx-4' href='webseries/tv'>Tv</a> 
              <a className='mx-4' href='prmium_movies&Tv&Webseries'>Primium</a> 
             <a className='mx-4' href='#'>About</a> 
            </ul>
            </div>

            
        </div>
    </div>
  )
}

export default Navbar
