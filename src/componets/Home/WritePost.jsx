import React from 'react'
import './style.css'
import img1 from '../images/writepost.jpg'
import {useNavigate} from 'react-router-dom'


export default function WritePost() {
  
   const Navigate=useNavigate(); 
   const handleClick=()=>{
       Navigate("/create")
   }

  return (
    <>
    
    <div className="writePostSec">
       <div className="container">
           <div className="row">
               <div className="col-lg-6">
                   <div className="write-post-content">
                     <h2>Let's make your next great hire. Fast.</h2>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                     <button className='btn btn-primary' onClick={handleClick}>Create Post</button>
                   </div>
                
               </div>

               <div className="col-lg-6">
                   <img src={img1} alt="" />
               </div>
           </div>
       </div>
    </div>



    </>
  )
}
