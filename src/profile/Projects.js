import './index.css';
import React from 'react';
import Emi from '../Projects/Emi.js';
import Cv from '../Projects/Cv.js';
import Ams from '../Projects/Ams.js'
function Projects(){
return (
    <>
       <section >
       
          <h1 className=''>
            My Projects 
          </h1>
          
          <div className='project-subcontainer'>
          <div className='projects-container'><Emi></Emi></div>
          <div className="projects-container"><Cv></Cv></div>
          <div className="projects-container"><Ams></Ams></div>

            </div>          
       </section>
    </>
)

}
export default Projects;
