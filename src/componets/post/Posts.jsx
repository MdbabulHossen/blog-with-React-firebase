import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { db} from '../../firebase-config';
import {getDocs,collection,deleteDoc,doc} from 'firebase/firestore'
import './Post.css'
import {useNavigate,Link} from 'react-router-dom'

export default function Posts() {
  const Navigate=useNavigate()
  const [posts,setPosts]=useState([]);

  const postsCollectionRef=collection(db,"post")

  useEffect(()=>{
           const fetchdata=async()=>{
           const data=await getDocs(postsCollectionRef)
          setPosts(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
      };
      fetchdata();
  },[])

const deletePost=(id)=>{
     const userDoc=doc(db,"post",id)
      deleteDoc(userDoc)
      Navigate("/");
      Navigate("/post")
}

  return <>
  <div className="container">
    <div className="post_titile">
          <h4>All the Post is here,,</h4>   
        </div>
        <hr />

        <div className="filter-button">
           <b>Filter Post: </b>
          <button className='btn btn-primary mr-2'>All</button>
          <button className='btn btn-primary mr-2'>Natural</button>
          <button className='btn btn-primary mr-2'>News</button>
          <button className='btn btn-primary mr-2'>World Wide</button>
        </div>
  </div>
   



    <div className="container">
      
        <div className="row">
            
      {
          posts.map((post,index)=>(
              
            <div className="col-lg-4 col-md-6 mt-20" key={index}> 
            <div class="container-fluid" id="card">
              <div className="card text-white) ">
               <img src="https://source.unsplash.com/random/200x200?sig=1" style={{height:"200px"}}  />
                  <div className="card-body">
                      <p style={{fontSize:"12px",color:"gray"}}>{new Date().toDateString()}</p>
                        <h4 className="card_head">{post.title}</h4>
                          <p className="card_text">{post.desc}</p> 
                            <p style={{fontSize:"13px",color:"gray"}}>author:  {post.author}</p>
                               <Link to={`singlepost/${post.id}`}><button className='btn btn-primary' >view more..</button></Link>
                               <button className='btn btn-danger ml-1' onClick={()=>{deletePost(post.id)}}>Delete Post</button>
                          
                  </div>
               </div>                 
            </div>
           </div>  
         
          ))
      }

            

<br />  
        </div>
    </div>

  </>;
}
