import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { NavLink,  useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/authcontext";

const ForgotPassword = () => {

    const navigate=useNavigate()

  const [email, setEmail] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [answer, setanswer] = useState("");

  const [auth,setauth]=useAuth()
   // eslint-disable-next-line no-unused-vars
  const location=useLocation()
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res=await axios.post("http://localhost:8080/forgot-password",
      {email,newpassword,answer})
      if(res && res.data.success){
          toast.success(res.data.message)
          navigate("/login")
          
          
        
        }else{
          toast.error(res.data.message)
        }
    } catch (error) {
        console.error('Error during registration:', error);
    }
};
  
  return (
    <div>
   
    <div>
      <Toaster />
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-7-offset m-auto my-5">
          <h3 className="text-center  form-heading" style={{color:"#ff6518"}}>Forgot password</h3>
            <form action="" className="my-3" onSubmit={handleSubmit}>
              
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
                  placeholder="Enter Your New password"
                  value={newpassword}
                  onChange={(e) => setnewpassword(e.target.value)}
                />
                <input
                  className="my-3"
                  type="text"
                  placeholder="Enter Your Fav Sports"
                  value={answer}
                  onChange={(e) => setanswer(e.target.value)}
                />
                <div className="check-forgot">
                <div className="checkbox">
                
                </div>
                <div className="forgot-password">
                  <NavLink to="/forgot-password" style={{ textDecoration: 'none' }}>Forgot password</NavLink>

                </div>

                </div>
                
                <button className="my-3 p-2" >Reset</button>
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
    </div>
  )
}

export default ForgotPassword
