import React from "react";
import Navbar from "../Components/Navbar";

const Category = () => {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ height: "100vh" }}>
        <h1 className="d-flex justify-content-center justify-content-lg-center m-auto mt-5">
          category
        </h1>
        <div className="text-center mt-5">
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
              
            </div>
          
          </div>  <div className="my-4" >This Page under Development...</div>
        </div>
      </div>
    </div>
  );
};

export default Category;
