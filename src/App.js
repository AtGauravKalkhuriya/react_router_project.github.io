import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute";

 
function App() {
  const[isLogedIn,setIsLogedIn] = useState(false);
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-richblack-900 flex flex-col">
      <Navbar isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login setIsLogedIn={setIsLogedIn}/>}/>
        <Route path="/Signup" element={<Signup setIsLogedIn={setIsLogedIn}/>}/>
        <Route path="/Dashboard" element={
          <PrivateRoute isLogedIn={isLogedIn}>
            <Dashboard/>
           </PrivateRoute>
        
      }/>
      </Routes>
    </div> 
    
  );
}

export default App;
