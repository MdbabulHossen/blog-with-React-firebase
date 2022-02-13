import React from 'react';
import { useRef } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { useUserContex } from '../../contex/UserContex';
import "./registerr.css"
import Error from '../ErrorAndLoading/Error';

export default function Register() {
const {registerUser,error} =useUserContex();
 const Navigate=useNavigate()
 const emailRef=useRef();
 const passwordRef=useRef()


 


  const submitHandle=(e)=>{
      e.preventDefault();
      const email=emailRef.current.value;
      const password=passwordRef.current.value;
     registerUser(email,password)
     Navigate("/login")
        
}







  return <>
    
   <div className="container">
      <div className="wrape-registerPage">

       <div className="registerPage">
     
    {error && <Error />}

      <div className="register-content " >
       <h3 style={{color:"white"}}>Register Your Account</h3>
      </div>
     
      <form onSubmit={submitHandle}>
        
       <div className="input-div">

          <input type="text" class="form-control"
                 placeholder='Enter Your UserName' required />
       </div>

       <div className="input-div">

          <input type="email" ref={emailRef} class="form-control" 
                 placeholder='Enter Your Email' name='email' required />
       </div>

       <div className="input-div">

          <input type="text" ref={passwordRef} class="form-control" 
                 placeholder='Enter Your Password' name='password' required />
       </div>

      

       <div className='input-btn'>
           <button className="btn " type="submit" >Register</button>
     </div>

     <p ><Link to={"/login"}style={{color:"white",textDecoration:"underline",marginTop:"15px"}}>already have account</Link></p>
    
     </form>



       </div>
     </div>
   </div>

    
  
  
  </>;
}
