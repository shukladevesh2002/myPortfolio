import '../index.css';
import React from 'react'
import cplusplus from './logos/cplusplus.jpg';
function Cplus(){
    return(
        <>
        <div className="c-plus language-container">
        <img src={cplusplus} alt="cPlus"></img>
           <p>
            <h5>C++ Developement</h5>
            The Language that I learnt First in My Programming Carrer is 
            C++ and  I developed Many Projects on C++ Language like Telephone Management System,
            Loan Management System , Score-Board Management System where I uses OOP's Concept,Functions.
            I used this language for learning Data Structure and Algorithm.
           </p>
        </div>
        </>
    )
}
export default Cplus;