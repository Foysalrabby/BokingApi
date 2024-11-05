import React, { useState } from 'react';
import './login.css';
import { useContext } from 'react';
import { AuthLogincontext } from '../../context/Authentication';
import axios from 'axios';


const Login = () => {
      const  [credentcial,setcredentcial]=useState({
        username:undefined,
        password:undefined
      })   
    const {user,loading,error,dispatch}=useContext(AuthLogincontext);
    //take password and user name
    const handlechange=(e)=>{
          //setcredentcial((prev)=>({...prev,[e.target.id]:e.target.value})) ; 
          setcredentcial((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
          }));   
    } 

    //handle login button
    const handleClick= async(e)=>{
    e.preventDefault();
    dispatch({type:"Login_Start"})
    try{
   const res=await axios.post("auth/login",credentcial);
   dispatch({type:"Login_Success",payload:res.data})
    }catch(err){
      dispatch({type:"Login_Fail",payload:err.response?.data})     
    }
    }
    console.log(user);
    return (
        <div className='login'>
        <div className='login-container'>
             <h2>Login</h2>
             <input type="text" id="username"
        placeholder="Username"
        value={credentcial.username}
        onChange={handlechange}
        className="login-input"
      />
         <input
        type="password"
        id="password"
        placeholder="Password"
        value={credentcial.password}
        onChange={handlechange}
        className="login-input"
      />

             <button onClick={handleClick} className="login-button"> login</button>
             {error&& <p className="error-text">error.message</p>}
        </div>
        </div>
    );
};

export default Login;