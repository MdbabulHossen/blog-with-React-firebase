import React, { useEffect, useState } from 'react'
import {getDocs,collection} from 'firebase/firestore'
import './Post.css'
import { db} from '../../firebase-config';



export default function SinglePost() {
  
    const[posts,setPost]=useState([])

    const postsCollectionRef=collection(db,"post")
    useEffect(()=>{
        const fetchdata=async()=>{
        const data=await getDocs(postsCollectionRef)
        setPost((data.docs.map((doc)=>({...doc.data(),id:doc.id})))
        )};
   fetchdata();
},[])


  return (
    <>
   <div className="container">
     <b style={{display:"flex",justifyContent:"center",fontSize:"20px",marginTop:"20px",marginBottom:"20px"}}>see post</b>
     <hr />
     <div className="row">
       <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="wrapMainSinglePost">
           <div className="main-singlePost">
            
              {
                posts.map((post)=>{
                  return(
                    <div className="singlePost" >
                    <img src="https://source.unsplash.com/random/200x200?sig=1" style={{width:"100%",height:"350px"}}  />
                    <p style={{fontSize:"12px",color:"gray",marginTop:"15px"}}>{new Date().toDateString()}</p>
                     <h3>{post.title}</h3>
                     <p className="singlepost_para">{post.desc}</p> 
                     <b style={{fontSize:"13px",color:"gray"}} className="authorb">author:  {post.author}</b>
                  </div>
                  )
                })
              }
         
          </div>
        </div>         
     </div>
    </div>
   </div> 
    </>
  )
}

