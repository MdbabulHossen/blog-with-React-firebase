import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContex } from '../../contex/UserContex';
import './navbar.css'

export default function Navbar() {
  const {logoutUser,setUser}=useUserContex();
 const logoutHandle=()=>{
     logoutUser();
     setUser(false)
 } 
 const{user}=useUserContex();

  return <>
  

  <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <p>Navbar</p>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">

    <ul class="navbar-nav">
    <Link to={"/"} className='nav-link active'><li>Home</li></Link>
    <Link to={"/create"}className='nav-link'><li>Create Post</li></Link>
    <Link to={"/post"} className='nav-link'><li style={{paddingRight:"15px"}}>Posts</li></Link>
    {
      user ? (<button onClick={logoutHandle} className='btn btn-primary'style={{maxWidth:"150px"}}>Logout</button>): (
        <Link to={"/login"}><button className='btn btn-primary ml-3 mt-2'>Login</button></Link> 
        
      )
    }
    
    {
      user ? "":(
        <Link to={"/register"}><button className='btn btn-primary ml-3 mt-2'>Register</button></Link>
        
      )
    }
    
  
   
    </ul>
  </div>
</nav>
  
  

  
  </>;
}
