
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Homedup() {
    const [message,setmessage]=useState("")
  const navigate=useNavigate()
  useEffect(()=>{
    const getres=async()=>{
        const response=await axios.get("http://localhost:5000/")
        console.log(response.data.user);
        setmessage(response.data.user)

    }
    getres();
    
  },[])

  return (
    <>
    <div className='homedup'>
        <br />
        <div>
            response : {message}
        </div>
      <button onClick={()=>{navigate("/dashboard")}} className='dash'>dashboard</button>
      <button onClick={()=>{navigate("/signup")}}>signup</button>
    </div>
      
    </>
  )
}

export const Dashboard=()=>{
    const navigate=useNavigate()
    
    const [message,setmessage]=useState("")
  
  useEffect(()=>{
    const getres=async()=>{
        const response=await axios.get("http://localhost:5000/dashboard")
        console.log(response.data.message);
        setmessage(response.data.message)

    }
    getres();
},[])
    return (
      <div className='dashboard' id='dashboard'>
        Dashboard 
        <div>
          response : {message} 
        </div>
        <button onClick={()=>{navigate("/")}}>home</button>
      </div>
    )
  }
  
export  const Signup=()=>{


    const [message,setmessage]=useState()
  const navigate=useNavigate()
  useEffect(()=>{
    const getres=async()=>{
        const response=await axios.get("http://localhost:5000/signup")
        console.log(response.data.message);
        setmessage(response.data.message)

    }
    getres();
},[])
    return(
      <div className='signup'>
        Signup
        <div>
          response :{message}
        </div>
        <button onClick={()=>{navigate("/dashboard")}}>getstarted</button>
      </div>
    )
  }

