import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { NavLink, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/authcontext";

const Login = () => {

const navigate=useNavigate()

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const [auth,setauth]=useAuth()
  const location=useLocation()
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res=await axios.post("http://localhost:8080/login",
      {email,password})
      if(res && res.data.success){
          toast.success(res.data.message)
          navigate(location.state || "/")
          setauth({
            ...auth,
            user:res.data.user,
            token:res.data.token
          })
          localStorage.setItem('auth',JSON.stringify(res.data))
        
        }else{
          toast.error(res.data.message)
        }
    } catch (error) {
        console.error('Error during registration:', error);
    }
};
  
  return (
    <div>
      <Toaster />
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-7-offset m-auto">
            <form action="" className="my-3" onSubmit={handleSubmit}>
              <h3 className="text-center text-dark form-heading" style={{color:"#46BABE;"}}>Login</h3>
              <div className="d-flex flex-column">
                
                <input
                  className="my-3"
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="my-3"
                  type="text"
                  placeholder="Enter Your password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <div className="check-forgot">
                <div className="checkbox">
                  {/* <input type="checkbox" />
                  <p>Show password</p> */}
                </div>
                <div className="forgot-password">
                  <NavLink to="/forgot-password" style={{ textDecoration: 'none' }}>Forgot password</NavLink>

                </div>

                </div>
                
                <button className="my-3" >Login</button>
                <div className="d-flex justify-content-center ">
                <p className="mx-2 text-secondary">Don't have an account?</p>
                <NavLink to="/register" style={{ textDecoration: 'none' }}>Create Now</NavLink>
                </div>
                

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login
