// import React, { useState, useEffect } from "react";
// import Navbar from "../../Components/Navbar";
// import AdminMenu from "../../Components/AdminMenu";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { Link } from "react-router-dom";

// const Products = () => {
//   const [product, setProduct] = useState([]);

//   const getAllProduct = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:8080/get-product");
//       setProduct(data.products);
//     } catch (error) {
//       console.log(error);
//       toast.error("something went wrong");
//     }
//   };

//   useEffect(() => {
//     getAllProduct();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <Toaster />
//       <div className="container">
//         <div className="row">
//           <div className="col-md-3">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9">
//             <h3 className="text-center my-3">All Products list</h3>
//             <div className="row"> {/* Bootstrap row to wrap cards */}
//               {product?.map((p) => (
//                 <div key={p._id} className="col-md-3 mb-4"> {/* col-md-3 for each card */}
//                   <Link to={`/dashboard/admin/product/${p.slug}`} className="product-Link">
//                     <div className="card h-100"> {/* Card with auto height */}
//                       <img
//                         src={`http://localhost:8080/get-photo/${p._id}`}
//                         className="card-img-top"
//                         alt={p.name}
//                         style={{width:"200px"}}
//                       />
//                       <div className="card-body">
//                         <h5 className="card-title">{p.name}</h5>
//                         <p className="card-text">{p.description}</p>
//                       </div>
//                     </div>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Products;


import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import AdminMenu from "../../Components/AdminMenu";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";

const Products = () => {
  const [product, setProduct] = useState([]);

  const getAllProduct = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/get-product");
      setProduct(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <>
      <Navbar />
      <Toaster />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h3 className="text-center my-3">All Products List</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {product?.map((p, index) => (
                  <tr key={p._id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={`http://localhost:8080/get-photo/${p._id}`}
                        alt={p.name}
                        style={{ width: "80px", height: "auto" }}
                      />
                    </td>
                    <td>{p.name}</td>
                    <td>{p.description}</td>
                    <td>{p.price}</td>
                    <td>{p.quantity}</td>
                    <td>
                      <Link to={`/dashboard/admin/product/${p.slug}`} className="btn btn-primary btn-sm">
                      <CiEdit />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
