import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { db} from '../../firebase-config';
import {addDoc,collection} from 'firebase/firestore'
import classes from './Create.module.css'

import Error from '../ErrorAndLoading/Error';
const intialValue={
    title:"",
    desc:"",
    author:"",

}

export default function CreatePost() {
 const Navigate=useNavigate();
 const [createPost,setCreatePost]=useState(intialValue)
 const [error,setError]=useState(false)

 const handleChange=(e)=>{
     setCreatePost({...createPost,[e.target.name]:e.target.value})
 }
 const userCollectionRef=collection(db,"post")

 const submitHandle=async(e)=>{
     e.preventDefault();
     Navigate("/post")
  try {
      await addDoc(userCollectionRef,createPost)
  } catch (error){
      setError(true)
      
  }

 }


  return <>
  <div className="container">
    <div className={classes.wraper_create_post}>
     <div className={classes.create_post}>
      <h4 style={{marginTop:"15px",marginBottom:"29px",color:'white'}}>Create Your Own Post!</h4>
      {error && <Error />}

      <form onSubmit={submitHandle}>

      <div className={classes.create_input}>
          <input type="text" placeholder='Enter Your Post title' name='title' required
          onChange={handleChange} className="form-control"/>
      </div>

      <div className={classes.create_input}>
      <textarea class="form-control" placeholder="Enter Your Post Descriptions"
                  onChange={handleChange} name='desc'></textarea>
      </div>
     

      <div className={classes.create_input}>
          <input type="text" placeholder='author of the post' name='author' required
          onChange={handleChange} className="form-control"/>
      </div>


          <button type="submit" className='btn btn-primary mt-3'>Create Post</button>
   
    </form>

      </div> 
    </div>     
  </div>
  
  
  
  
  
  </>;
}
