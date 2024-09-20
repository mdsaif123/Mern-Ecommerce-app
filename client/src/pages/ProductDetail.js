// import React, { useEffect, useState } from 'react'
// import Navbar from '../Components/Navbar'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'

// const ProductDetail = () => {
//     const params=useParams()
//     const [product,setproducts]=useState([])

// //get product
// const getProduct=async()=>{
//     try {

//         const {data}=await axios.get(`http://localhost:8080/get-product/${params.slug}`)
//         setproducts(data?.product)

//     } catch (error) {
//         console.log(error)

//     }
// }
// useEffect(()=>{
// if(params?.slug) getProduct()
// },[params?.slug])

//   return (
//     <div>
//     <Navbar/>

//       <div className="container">
//         <div className="row">
//         <h1 className='text-center my-3'>Product detail</h1>
//             <div className="col-md-6"> <img
//                         src={`http://localhost:8080/get-photo/${product._id}`}
//                         alt={product.name}
//                         style={{ width: "100%",}}
//                       /></div>
//             <div className="col-md-6">
//                 <h4>Name:{product.name}</h4>
//                 <h4>Price:{product.price}</h4>

//                 <h4>Description:{product.description}</h4>
//                 <h4>category:{product.category.name}</h4>
//             </div>
//         </div>
//         <div className="row">Similar product</div>
//       </div>

//     </div>
//   )
// }

// export default ProductDetail

import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [relatedproduct, setrelatedproduct] = useState([]);

  // Get product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getsimilarproduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  // Get similar products
  const getsimilarproduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/related-product/${pid}/${cid}`
      );
      setrelatedproduct(data?.products || []); // Ensure data is an array
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <h1 className="text-center my-3">Product Detail</h1>
          <div className="col-md-6">
            <img
              src={`http://localhost:8080/get-photo/${product._id}`}
              alt={product.name}
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-6 mt-3">
          <h4 className="text-primary">Price: {product.price}</h4>
            <h4>Name: {product.name}</h4>
          
            <p>Description: {product.description}</p>
            <h4>Category: {product.category?.name}</h4>
            <button className="btn btn-secondary my-3">Add to cart</button>
          </div>
        </div>
        {/* 
        related product */}

        <div className="row">
          {relatedproduct.length > 0 ? (
            relatedproduct.map((p) => (
              <div className="col-md-4" key={p._id}>
                <div className="card m-2">
                  <img
                    style={{ width: "200px" }}
                    src={`http://localhost:8080/get-photo/${p._id}`}
                    alt={p.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title text-warning">{p.price}</h5>
                    <p className="card-text">
                      {p.description.substring(0, 30)}
                    </p>
                    <div className="d-flex">
                      <button className="btn btn-secondary">Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center my-3 text-danger">No related products available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
