import React from "react";
import './index.css';
import Skills from "../Skills";
import Profile from './Profile.jpg';
export default function About(){
return (
    <>
        <section  id="about about-container">
           <h1>About Me</h1>
         
             <p className="about-para">
                I am Devesh Shukla from Lucknow,Uttar Pradesh,India. I am a  Skilled Full Stack Developer 
                with the deep knowledge of all Programming languages required in the Full Stack Development.
                I am a Proactive Developer because I take all resonsibilties of my projects on my self.I also  work on 
                Backend Languages like MySql, NodeJS etc.
             </p> 
             <img src={Profile} className="about-profile" alt="about-profile"></img>    
             <Skills></Skills>    
        </section> 
    </>

)
}