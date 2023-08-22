import {HashLink as Link} from 'react-router-hash-link';
import React from 'react';
import  ReactDOM from 'react-dom/client';
import Home from './Home';
import About from './About';
import Project from './Projects';
function Navbar(props){
return (
      <>
       <nav className='nav-bar'>
          
          <Link to="" className='a-links'  ><i className='bi bi-house-door-fill'></i>Home</Link>
          <Link to="" className='a-links' id="about">About Us</Link>
          <Link to="" className='a-links'>Services</Link>
         <Link to="" className='a-links'>Contact Us</Link>
  
       </nav>
      </>
    )
}


export default Navbar;