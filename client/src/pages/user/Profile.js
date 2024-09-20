// import React,{useEffect, useState} from 'react'
// import UserMenu from './UserMenu'
// import Navbar from '../../Components/Navbar'
// import { useAuth } from '../../context/authcontext'
// import axios from 'axios'
// import toast, { Toaster } from "react-hot-toast";
// import { NavLink } from 'react-router-dom'

// const Profile = () => {

//   //context
//   const [auth,setauth]=useAuth()

//   //state
//   const [name, setname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setpassword] = useState("");
//   const [phone, setphone] = useState("");
//   const [address, setaddress] = useState("");


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const {data}=await axios.put("http://localhost:8080/profile",
//       {name,email,phone,password,address})
//       if(data?.error){
//         toast.error(data?.error)
//       }
//       else{
//         setauth({...auth, user:data?.updatedUser})
//         let ls=localStorage.getItem("auth")
//         ls=JSON.parse(ls)
//         ls.user=data.updatedUser
//         localStorage.setItem("auth",JSON.stringify(ls))
//         toast.success("profile updated success fully")
//       }
     
//     } catch (error) {
//         console.error('Error during registration:', error);
//     }
// };

// //get user data
// useEffect(()=>{
// const {email,name,phone,address,password}=auth.user
// setname(name)
// setEmail(email)
// setaddress(address)

// setphone(phone)
// },[])



//   return (
//     <div>
//     <Navbar/>
//     <Toaster />
//       <div className="container mt-4">
//         <div className="row">
//             <div className="col-md-3">
//                 <UserMenu/>
//             </div>
//             <div className="col-md-9">
//                 <h2 className="text-center text-secondary">My Profile</h2>
             
                
//             <form action="" className="my-3" onSubmit={handleSubmit}>
             
//               <div className="d-flex flex-column w-75">
//                 <input
//                   className="my-3"
//                   type="text"
//                   placeholder="Enter Your Name"
//                   value={name}
//                   onChange={(e) => setname(e.target.value)}
//                 />
//                 <input
//                   className="my-3"
//                   type="email"
//                   placeholder="Enter Your Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   disabled
//                 />
//                 <input
//                   className="my-3"
//                   type="text"
//                   placeholder="Enter Your password"
//                   value={password}
//                   onChange={(e) => setpassword(e.target.value)}
//                 />
//                 <input
//                   className="my-3"
//                   type="text"
//                   placeholder="Enter Your phone"
//                   value={phone}
//                   onChange={(e) => setphone(e.target.value)}
//                 />
//                 <input
//                   className="my-3"
//                   type="text"
//                   placeholder="Enter Your address"
//                   value={address}
//                   onChange={(e) => setaddress(e.target.value)}
//                 />
              

//                 <button className='p-2 my-2'>Update</button>
                
//               </div>
//             </form>
        
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Profile


import React, { useEffect, useState } from 'react';
import UserMenu from './UserMenu';
import Navbar from '../../Components/Navbar';
import { useAuth } from '../../context/authcontext';
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";

const Profile = () => {
  // context
  const [auth, setAuth] = useAuth();

  // state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("http://localhost:8080/profile", {
        name, email, phone, password, address
      });

      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      console.error('Error during profile update:', error);
    }
  };

  // Get user data from auth context on component mount
  useEffect(() => {
    console.log("User data:", auth?.user);
    const { email, name, phone, address } = auth.user;
    setName(name || "");  // Safe check if field is undefined
    setEmail(email || "");
    setPhone(phone || "");
    setAddress(address || ""); // Ensure the address field is correctly set
  }, [auth?.user]);
  

  return (
    <div>
      <Navbar />
      <Toaster />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h2 className="text-center text-secondary">My Profile</h2>

            <form className="my-3" onSubmit={handleSubmit}>
              <div className="d-flex flex-column w-75">
                <input
                  className="my-3"
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="my-3"
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled
                />
                <input
                  className="my-3"
                  type="text"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  className="my-3"
                  type="text"
                  placeholder="Enter Your Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  className="my-3"
                  type="text"
                  placeholder="Enter Your Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />

                <button className="p-2 my-2">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
