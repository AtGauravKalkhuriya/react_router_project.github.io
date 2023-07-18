import React from 'react'
import Template from '../Components/Template'
import login from "../assets/login.png"

const Login = ({setIsLogedIn}) => {
  return (
    
       <Template
    title="Welcome Back"
    desc1="Build Skills for Today, Tomorrow and beyond."
    desc2="Education to future-proof your Career"
    image={login}
    formtype="login"
    setIsLogedIn={setIsLogedIn}/>

   
   
  )
}

export default Login