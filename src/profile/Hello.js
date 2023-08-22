import Projects from './Projects.js';
import React, { useState } from 'react';
import Profile from './Profile.jpg';
import Languages from './Services.js';
import Home from './Home.js';
import './index.css';
import About from './About.js';
import Contact from './Contact.js';
import Work from './Work.js';

import { Link} from 'react-router-dom';

function Hello() {
  const [state,upState]=useState(<Home></Home>);
  function updateState(pos){
    if(pos==="about"){
      upState(<About></About>)
   return;
    }
    if(pos==="contact"){
      upState(<Contact></Contact>)
return;
    }
      if(pos==="services"){
        upState(<Languages></Languages>)
     return;
      }
      if(pos==="projects"){
        upState(<Projects></Projects>)
  return;
      }
      if(pos==="work"){
        upState(<Work></Work>)
  return;
      }
    
      if(pos==="home"){
        upState(<Home></Home>)
  return ;
      }
    

  }  
  return (

    <>
       
      

        <div className='sub-container-1'>
          <div className='profile-container'>

            <img src={Profile} className="profile" alt="Profile"  id="profile"></img></div>
          <div className='profile-icons'>
          <Link to=""   onClick={()=>updateState("https://facebook.com")}><i className='bi bi-linkedin profile-icons-links' ></i></Link>
          <Link to=""   onClick={()=>updateState("home")}><i className='bi bi-facebook profile-icons-links' ></i></Link>
          <Link to=""   onClick={()=>updateState("home")}><i className='bi bi-instagram profile-icons-links' ></i></Link>
          <Link to=""   onClick={()=>updateState("home")}><i className='bi bi-twitter profile-icons-links' ></i></Link>
          </div>
          <section>
            <nav className='nav-bar'>
          
          <Link to="" className='a-links'  onClick={()=>updateState("home")}><i className='bi bi-house-door-fill' ></i>Home</Link>
          <Link to="" className='a-links' id="about" onClick={()=>updateState("about")}><i className='bi bi-person-fill' ></i>About Us</Link>
          <Link to="" className='a-links' id="about" onClick={()=>updateState("projects")}><i className='bi bi-folder-fill' ></i>Projects</Link>
          <Link to="" className='a-links' id="work" onClick={()=>updateState("work")}><i className='bi bi-bag-fill' ></i>Work Experience</Link>
          <Link to="" className='a-links' onClick={()=>updateState("services")}><i className='bi bi-gear-fill' ></i>Services</Link>
         <Link to="" className='a-links' onClick={()=>updateState("contact")}><i className='bi bi-chat-fill' ></i>Contact Us</Link>
  
       </nav>
          </section>
        </div>

         <div className='sub-container-second'>{state}
               
      {/* <About id="about" className="about-container"></About>
        <Projects className='projects-main-container'></Projects>
        <Work className='work-main-container'></Work>
        <Languages className='language-main-container'></Languages>
        <Services className='services-main-container'></Services> 
         */}
  </div>  

    </>
  )
}


export default Hello;
