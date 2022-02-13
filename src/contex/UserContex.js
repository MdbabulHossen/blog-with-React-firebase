import { createContext, useState,useContext } from "react";
import {auth} from '../firebase-config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from "react";



const UserContext= createContext();

export const useUserContex=()=>{
  return useContext(UserContext);
}

export const UserContextProvider=({children})=>{
   
    const[user,setUser]=useState(false);
    const [loading,setLoading]=useState();
    const [error,setError]=useState("")
    
        
    useEffect(()=>{
        setLoading(true)
        const unsubcribe=onAuthStateChanged(auth,(res)=>{
            res ? setUser(res):setUser(false)
            setError("")
            setLoading(false)
        });
        return unsubcribe;
    },[])


    const registerUser=(email,password)=>{
         
         createUserWithEmailAndPassword(auth,email,password) 
         .then((res)=>console.log(res))
         .catch((err)=>setError(err.message))
         
    } 
   
    const loginUser=async(email,password)=>{
            signInWithEmailAndPassword(auth,email,password) 
            .then((res)=> console.log(res))
            .catch((err)=>setError(err.message))
         
    }
 const logoutUser=()=>{
         signOut(auth) 
 }


    const contextValue={user,error,loading,setUser,registerUser,loginUser,logoutUser};
   return(
     <UserContext.Provider value={contextValue}> {children}</UserContext.Provider>
   ) 
}