import Intern_Certificate from './Intern_Certificate.pdf';
import React from 'react';
import './index.css';
function Work(){
return(
    <>
<section >
          <h1 className=''>My Work Experience </h1>
          <div className='work-container'>
                <h2>Web Developer<h4>(Intern)</h4></h2>
                 <h3>Dayal Industries Pvt Ltd.</h3>
                 <h6>(July-2021 to Feburary-2022)</h6>
                 <div className='work-content'>
                    <ul>
                        <li>
                           The Order and Scheme Mangament System Was Developed By I.T team in the Organization which is used in the field 
                           by the employee's of the organization.
                           The Language Used in this Software was Html,Css,Javascript and for Backend we
                           use PHP and for Database MySql is used on the Wamp Server.  
                        </li>
                        <li>
                             My role was to deal with the backend of the Software using PHP 
                             where I learnt a lot of development using PHP.The main thing that I learnt is to 
                             use MySql with PHP and came to know  how CRUD Operations are deal with 
                             any Website.
                       </li>
                       <li>
                             I had also dealed with  the testing part of the  Software Where I provided the best feedback
                             using all the  phases of Software Testing and tried to remove the all defects and errors
                             with the collabration of the other team members.   
                       </li>
                    </ul>
                   
 <a href={Intern_Certificate} download="Certificate.pdf" className='btn btn-download'><i className='bi bi-download'></i>Certificate</a>
                   
                    </div>          </div>      
       </section>
    </>
)
}
export default Work;