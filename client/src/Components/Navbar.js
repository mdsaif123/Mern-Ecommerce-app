// import React from "react";
// import { CiUser } from "react-icons/ci";
// import { CiShoppingCart } from "react-icons/ci";
// import { Link, NavLink } from "react-router-dom";
// import { useAuth } from "../context/authcontext";
// import toast, { Toaster } from "react-hot-toast";
// import Search from "./Search";
// import { useCart } from "../context/Cart";
// import {Badge} from "antd"


// const Navbar = () => {
//   const [auth, setauth] = useAuth();
//   const [cart,setcart]=useCart()
//   const handleLogout = () => {
//     setauth({
//       ...auth,
//       user: null,
//       token: "",
//     });
//     localStorage.removeItem("auth");
//     toast.success("Logout Successfully");
//   };

//   return (
//     <div>
//       <Toaster />
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container">
//           <Link className="navbar-brand" href="#">
//             <img
//               src="https://tse4.mm.bing.net/th?id=OIP.a4Fw1RGmiGPevX9FQUBg1QHaDP&pid=Api&P=0&h=180"
//               alt=""
//               style={{ width: "120px" }}
//             />
//           </Link>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarContent"
//             aria-controls="navbarContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>

//           <div className="collapse navbar-collapse" id="navbarContent">
//             <div className="d-flex justify-content-between align-content-center w-100">
//               <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <NavLink
//                     className="nav-link active"
//                     aria-current="page"
//                     to="/"
//                   >
//                     Home
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/category">
//                     Category
//                   </NavLink>
//                 </li>

//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/about">
//                     About Us
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/contact">
//                     Contact us
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                 <Badge count={cart?.length} showZero>
//                   <NavLink className="nav-link" to="/cart">
//                    Cart
//                   </NavLink>
//                   </Badge>
//                 </li>

//                 {!auth.user ? (
//                   <>
//                     <li className="nav-item">
//                       <NavLink className="nav-link" to="/login">
//                         Login
//                       </NavLink>
//                     </li>
//                   </>
//                 ) : (
//                   <>
//                     <li className="nav-item dropdown">
//                       <NavLink
//                         className="nav-link dropdown-toggle"
//                         href="#"
//                         role="button"
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                       >
//                         {auth?.user?.name}
//                       </NavLink>
//                       <ul className="dropdown-menu">
//                         <li>
//                         <NavLink
//               to={`/dashboard/${
//                 auth?.user?.role === 1 ? "admin" : "user"
//               }`}
//               className="dropdown-item"
//             >
//               Dashboard
//             </NavLink>
//                         </li>
//                         <li>
//                         <NavLink

//                             onClick={handleLogout}
//                             className="dropdown-item"
//                             to="/"
//                           >
//                             Logout
//                           </NavLink>                        </li>
                        
                        
//                       </ul>
//                     </li>
//                   </>
//                 )}
//               </ul>

//               <div className="d-flex d-sm-inline-flex-colum fs-2 mx-3">
//                 {/* <NavLink className="nav-link" to="/cart">
//                   <CiUser className="mx-3" />
//                 </NavLink>

//                 <NavLink className="nav-link" to="/cart">
//                   <CiShoppingCart />
//                 </NavLink> */}

//                 <Search/>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


import React from "react";
import { CiUser, CiShoppingCart } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/authcontext";
import toast, { Toaster } from "react-hot-toast";
import Search from "./Search";
import { useCart } from "../context/Cart";
import { Badge } from "antd";

const Navbar = () => {
  const [auth, setauth] = useAuth();
  const [cart, setcart] = useCart();
  const handleLogout = () => {
    setauth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <div>
      <Toaster />
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.a4Fw1RGmiGPevX9FQUBg1QHaDP&pid=Api&P=0&h=180"
              alt="logo"
              style={{ width: "120px" }}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="d-flex justify-content-between w-100 align-items-center">
              {/* Center the links */}
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/category">
                    Category
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
               
              

              </ul> 

              {/* Search and Icons */}
              <div className="d-flex align-items-center justify-content-between">
  <span className="d-flex align-items-center">
    {!auth.user ? (
      <li className="nav-item list-unstyled me-3"> {/* Added spacing here */}
        <NavLink className="nav-link login-btn-design" to="/login">
          Login
        </NavLink>
      </li>
    ) : (
      <li className="nav-item dropdown list-unstyled me-3"> {/* Added spacing here */}
        <NavLink
          className="nav-link dropdown-toggle login-btn-design"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {auth?.user?.name}
        </NavLink>
        <ul className="dropdown-menu border-2">
          <li className="list-unstyled">
            <NavLink
              to={`/dashboard/${
                auth?.user?.role === 1 ? "admin" : "user"
              }`}
              className="dropdown-item "
            >
              Dashboard
            </NavLink>
          </li>
          <li className="list-unstyled">
            <NavLink
              onClick={handleLogout}
              className="dropdown-item "
              to="/"
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </li>
    )}
    <Badge count={cart?.length} showZero>
      <NavLink className="nav-link" to="/cart">
        <CiShoppingCart size={24} />
      </NavLink>
    </Badge>
  </span>
</div>

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
