import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <>
    
    <div className="footer">
        <div className="container">
           <div className="row">
               <div className="col-lg-6">
                <div className="frist-content">
                    <div className="content">
                       <h5>About us</h5>
                    </div>
                   <div className="about">
                      
                       <p style={{color:"gray"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                   </div>
                </div>
               </div>
               <div className="col-lg-6">
                <div className="frist-content">
                    <div className="content">
                    <h5>Usefull Links</h5>
                    </div>
                    <div className="nav">
                    <ul>
                        <Link to={"/"}><li>Home</li></Link>
                        <Link to={"/post"}><li>Posts</li></Link>
                        <Link to={"/create"}><li>Create Post</li></Link>
                        <Link to={"/login"}><li>Login</li></Link>
                       
                    </ul>
                    </div>
                </div>
               </div>




           </div>

           <div className="last-footer">
           
           <p>© Copyright 2022 All rights reserved.</p>
           
           </div>
        </div>
        
    </div>
    
    
    
    
    
    
    
    </>
  )
}
