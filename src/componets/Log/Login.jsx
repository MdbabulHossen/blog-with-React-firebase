import React from 'react';
import { useRef } from 'react';
import { Link} from 'react-router-dom';
import { useUserContex } from '../../contex/UserContex';
import Error from '../ErrorAndLoading/Error';


export default function Login() {

  
    const {loginUser,error,user,setUser} =useUserContex();
    const emailRef=useRef();
    const passwordRef=useRef()
   
   
    const submitHandle =(e)=>{
      e.preventDefault();
    const  email=emailRef.current.value;
    const password=passwordRef.current.value;
       loginUser(email,password);
      
        
         
    }
   
  return <>
  <div>
        
 <div className="container">
   <div className="wrape-registerPage">
     <div className="registerPage">
      <div className="register-content " >
       <h3 style={{color:"white"}}>LogIn Your Account</h3>
      </div>

      {error && <Error />}
      {user && ( <div class="alert alert-success" role="alert">
             LogIn successfully!
              </div>)}


      <form onSubmit={submitHandle}>
    
       <div className="input-div">

          <input type="email" class="form-control"  ref={emailRef}
                 placeholder='Enter Your Email' name='email' required />
       </div>

       <div className="input-div">

          <input type="text" class="form-control"  ref={passwordRef}
                 placeholder='Enter Your Password' name='password' required />
       </div>


       <div className='input-btn'>
           <button className="btn " type="submit" >Login</button>
     </div>

     <p ><Link to={"/register"}style={{color:"white",marginTop:"15px",textDecoration:"underline"}}>Register now!</Link></p>

     </form>



     </div>
   
     </div>
   </div>
  </div>
     
  </>;
}
