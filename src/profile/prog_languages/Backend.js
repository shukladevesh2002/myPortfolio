import '../index.css';
import React from 'react';
import javascript from  './logos/backend.png';
function Javascript(){
    return(
        <>
        <div className="javascript language-container">
        <img src={javascript} alt="backend"></img>
           <p>
           <h5>Backend Developement</h5>
           The Language's that I used For Backend Development is PHP which is known as 
           Server Side Scripting langugae and it is very light weight and easy to implement with HTMLand Javascript.
            I uses Mysql for the Database Connections,Accessing data,Inserting Data etc.
           </p>
        </div>
        </>
    )
}
export default Javascript;