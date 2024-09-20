// import React, { useEffect, useState } from "react";
// import Navbar from "../Components/Navbar";
// import { useCart } from "../context/Cart";
// import { useAuth } from "../context/authcontext";
// import { useNavigate } from "react-router-dom";
// import DropIn from "braintree-web-drop-in-react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";



// const CartPages = () => {
//   const [cart, setcart] = useCart();
//   const [auth, setauth] = useAuth();
//   const navigate = useNavigate();


// const [clientToken,setClientToken]=useState("")
// const [instance,setinstance]=useState("")
// const [loading,setloading]=useState("")

//   //total price

//   const TotalPrice=()=>{
//     try {
//      let total=0
//      cart?.map((item=>{total=total+item.price}))
//      return total.toLocaleString("inr",{
//       style:"currency",
//       currency:"INR"
//      })
      
//     } catch (error) {
//       console.log(error)
      
//     }
//   }

//   //delete item
//   const removecartItem=async(pid)=>{
//     try {
//       let mycart=[...cart]
//       let index=mycart.findIndex((item)=>item)
//       mycart.splice(index,1)
//       setcart(mycart)
//       localStorage.setItem("cart",JSON.stringify(mycart))
//     } catch (error) {
//       console.log(error)
      
//     }
//   }

//   //get payment gateway token
//   const getToken = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:8080/product/braintree/token");
//       console.log(data); // Check if clientToken is being fetched
//       setClientToken(data?.clientToken);
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
//   //payment Function
//   const handlepayment=async()=>{
//     try {
//       setloading(true)
//       const {nonce}=await instance.requestPaymentMethod();
//       const {data}=await axios.post("http://localhost:8080/product/braintree/payment",{
//         nonce,cart
        
//       })
//       setloading(false)
//       localStorage.removeItem("cart")
//       setcart([])
//       navigate("/dashboard/user/order")
//       toast.success("Payment Successfull")
//       setloading(false)

//     } catch (error) {
//       console.log(error)
      
//     }

//   }

//   useEffect(()=>{
//     getToken()
//   },[auth?.token])



//   return (
//     <div>
//       <Navbar />
//       <Toaster />
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="text-center ng-light p-2">
//               {`Hello ${auth?.token && auth?.user?.name}`}
//             </div>
//             <h4 className="text-center">
//               {cart?.length > 0
//                 ? `You have ${cart.length} item${
//                     cart.length > 1 ? "s" : ""
//                   } in your cart ${
//                     auth?.token ? "" : "please login to checkout"
//                   }`
//                 : "Your cart is empty"}
//             </h4>
//           </div>
//         </div>

//         <div className="row my-3">
//           <div className="col-md-8">
//            {cart?.map((p)=>(
//             <div className="row">
//             <div className="col-md-4"> <img style={{width:"100px"}}
//             src={`http://localhost:8080/get-photo/${p._id}`}
//             alt={p.name}
//             className="card-img-top"
//           /></div>
//             <div className="col-md-8">
//               <h4>{p.name}</h4>
//               <p>{p.price}</p>
//               <p>{p.description}</p>
//               <button className="btn btn-danger" onClick={()=>removecartItem(p._id)}>Remove</button>
//             </div>
//             </div>
//            ))}
//           </div>
//           <div className="col-md-4">
//          <h4>Cart Summary</h4>
//          <hr />
//          <p>Total:  {TotalPrice()}</p>
//          {auth?.user?.address ? (
//           <>
//             <div className="mb-3">
//               <h4>Curreny address</h4>
//               <h5>{auth?.user?.address}</h5>
//               <button className="btn btn-outline-warning" 
//               onClick={()=>navigate('/dashboard/user/profile')}
//               >Change Address</button>
//             </div>
//           </>
//          ):(
//           <div className="mb-3">
//             {
//               auth?.token ? (
//                 <button className="btn btn-outline-warning" onClick={()=>navigate("/dashboard/user/profile")}>Update address</button>
//               ):(
//                 <button className="btn btn-outline-warning" onClick={()=>navigate("/login",{state:"/cart"})}>Plaese login to checkout</button>
//               )
//             }
//           </div>
//          )}
//          <div className="mt-2">
//          {!clientToken || !cart?.length ? ("") : (
//     <>
//       <DropIn
//         options={{
//           authorization: clientToken,
//           paypal: {
//             flow: "vault",
//           },
//         }}
//         onInstance={(instance) => setinstance(instance)}
//       />
//       <button className="btn btn-primary" onClick={handlepayment} disabled={!loading || !instance || !auth?.user?.address}>
//         {loading ? "processing..." : "Make Payment"}
//       </button>
//     </>
// )}
          
//          </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPages;


import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { useCart } from "../context/Cart";
import { useAuth } from "../context/authcontext";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const CartPages = () => {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);

  // Total price calculation
  const TotalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total += item.price;
      });
      return total.toLocaleString("inr", {
        style: "currency",
        currency: "INR",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Remove item from cart
  const removeCartItem = async (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid); // Corrected findIndex
      if (index !== -1) {
        myCart.splice(index, 1);
        setCart(myCart);
        localStorage.setItem("cart", JSON.stringify(myCart));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Get payment gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/product/braintree/token");
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle payment
  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod(); // Get payment nonce
      const { data } = await axios.post("http://localhost:8080/product/braintree/payment", {
        nonce,
        cart,
      });
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/order");
      toast.success("Payment Successful");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getToken(); // Fetch the client token when the component loads
  }, [auth?.token]);

  return (
    <div>
      <Navbar />
      <Toaster />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center bg-light p-2">
              {`Hello ${auth?.token && auth?.user?.name}`}
            </div>
            <h4 className="text-center">
              {cart?.length > 0
                ? `You have ${cart.length} item${cart.length > 1 ? "s" : ""} in your cart ${
                    auth?.token ? "" : "please login to checkout"
                  }`
                : "Your cart is empty"}
            </h4>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-md-8">
            {cart?.map((p) => (
              <div className="row" key={p._id}>
                <div className="col-md-4">
                  <img
                    style={{ width: "100px" }}
                    src={`http://localhost:8080/get-photo/${p._id}`}
                    alt={p.name}
                    className="card-img-top"
                  />
                </div>
                <div className="col-md-8">
                  <h4>{p.name}</h4>
                  <p>{p.price}</p>
                  <p>{p.description}</p>
                  <button className="btn btn-danger" onClick={() => removeCartItem(p._id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4">
            <h4>Cart Summary</h4>
            <hr />
            <p>Total: {TotalPrice()}</p>

            {auth?.user?.address ? (
              <>
                <div className="mb-3">
                  <h4>Current address</h4>
                  <h5>{auth?.user?.address}</h5>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => navigate("/dashboard/user/profile")}
                  >
                    Change Address
                  </button>
                </div>
              </>
            ) : (
              <div className="mb-3">
                {auth?.token ? (
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => navigate("/dashboard/user/profile")}
                  >
                    Update address
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => navigate("/login", { state: "/cart" })}
                  >
                    Please login to checkout
                  </button>
                )}
              </div>
            )}

            <div className="mt-2">
              {!clientToken || !cart?.length ? (
                ""
              ) : (
                <>
                  <DropIn
                    options={{
                      authorization: clientToken,
                      paypal: {
                        flow: "vault",
                      },
                    }}
                    onInstance={(instance) => setInstance(instance)}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={handlePayment}
                    disabled={loading || !instance || !auth?.user?.address}
                  >
                    {loading ? "Processing..." : "Make Payment"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPages;
