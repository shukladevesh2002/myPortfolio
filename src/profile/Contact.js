import React, { useState } from 'react';
function Contact(){
  const [state,updateState]=useState({
    name:"",
    email:"",
    mobile:"",
    msg:"",
    add:""
  });
function inputVal(e){
 if(e.target.name==="name"){updateState({name:e.target.value})};
 if(e.target.name==="email")updateState({email:e.target.value});
 /*(e.target.name==="mobile")? updateState({mobile:e.target.value}):"";
 (e.target.name==="address")? updateState({add:e.target.value}):"";
 (e.target.name==="message")? updateState({msg:e.target.value}):"";*/
}  
return(
     <>
       <section >

        <h1>You Can Contact Me:</h1>
               <div className='contact-container'>
               <form className='contact-form'>
                    <div className='form-group'>
                      <label htmlFor="name" className="form-label" id="name-label">Name:</label> 
                      <input type="text" className='form-control' value={state.name} onChange={inputVal} id="name"  name="name"></input>
                    </div>
                    <div className='form-group'>
                      <label htmlFor="email" className="form-label" id="email-label">Email:</label> 
                      <input type="text" className='form-control' onChange={inputVal} id="email" value={state.email} name="email"></input>
                    </div>
                    <div className='form-group'>
                      <label htmlFor="city" className="form-label" id="city-label">Address:</label> 
                      <input type="text" className='form-control' onChange={inputVal} id="city" value={state.add} name="address"></input>
                    </div>
                    <div className='form-group'>
                      <label htmlFor="mobile" className="form-label" id="mobile-label">Mobile Number:</label> 
                      <input type="text" className='form-control' onChange={inputVal} id="mobile" value={state.mobile} name="mobile"></input>
                    </div>
                    <div className='form-group'>
                      <label htmlFor="message" style={{valign:"top"}} className="form-label" id="message-label">Any Message:</label> 
                      <textarea type="text" className='form-control textarea' id="message" onChange={inputVal} value={state.msg} name="message" cols={100} rows={5}></textarea>
                    </div>
                    <div className='form-group'>
                    <input type="submit" className='btn-primary form-control submit'onChange={inputVal}  value="Submit"></input>

                    </div>
                                   </form>
               </div>
       </section>
    </>
)

}
export default Contact;
