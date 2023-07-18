import React from 'react'
import signup from "../assets/signup.png"
import Template from '../Components/Template'


const Signup = ({setIsLogedIn}) => {
  return (
    <Template
    title="Join The Millions Learning to code with StudyNotion for free"
    desc1="Build Skills for Today, Tomorrow and beyond."
    desc2="Education to future-proof your Career"
    image={signup}
    formtype="signup"
    setIsLogedIn={setIsLogedIn}/>
  )
}

export default Signup