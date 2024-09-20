import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'

import axios from 'axios'
import {Checkbox,Radio} from "antd"
import { Prices } from '../Components/Prices'
import { Navigate, useNavigate } from 'react-router-dom'
import { useCart } from '../context/Cart'

import toast, { Toaster } from "react-hot-toast";
import Banner from '../Components/Banner/Banner'
import Offer from '../Components/Offer/Offer'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

import { FaCartArrowDown } from "react-icons/fa";





const Home = () => {

  const navigate=useNavigate()

  const[products,setproducts]=useState([])
  const[categories,setcategories]=useState([])
  const [checked,setchecked]=useState([])
  const [radio,setradio]=useState([])

  const [cart,setcart]=useCart()

  




  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/get-category");
      if (data.success) {
        setcategories(data.category);
      }
    } catch (error) {
      console.log(error);
    
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);


  //fetching product 
  const getAllProduct=async()=>{
    try {
      const {data}=await axios.get("http://localhost:8080/get-product")
      setproducts(data.products)
      
    } catch (error) {
      console.log(error)
      
    }

  }
//filter product
  const handleFilter=(value,id)=>{
let all=[...checked]
if(value){
  all.push(id)
}else{
  all=all.filter(c=>c!==id)
}
setchecked(all)
  }

  useEffect(()=>{
    if(!checked.length || !radio.length)getAllProduct()
      //eslint-disable-nextline

  },[])

  useEffect(()=>{
    if(!checked.length || !radio.length) FilterProduct()
  },[checked,radio])


  //get filtered product
const FilterProduct=async()=>{
  try {
    const {data}=await axios.post("http://localhost:8080/product-filters",{checked,radio})
    setproducts(data?.products)
  } catch (error) {
    console.log(error)
    
  }

}



  return (
   <>
    <Navbar/>
    <Banner/>
    <Toaster />
    <div className="container my-3">
      <div className="row">
        <div className="col-md-3 my-5">
      <h4 className="">Filter by category</h4>
      <div className="d-flex flex-column">
     {categories.map((c)=>(
      <Checkbox key={c._id} onChange={(e)=> handleFilter(e.target.checked,c._id)}>
          {c.name}
        </Checkbox>
     ))}
     </div>


{/* //price filter */}

     <h4 className=" mt-4">Filter by Price</h4>
      <div className="d-flex flex-column">
    <Radio.Group onChange={e=>setradio(e.target.value)}>
      {Prices?.map(p=>(
        <div key={p._id}>
        <Radio value={p.array} >{p.name}</Radio>
        </div>
      
      ))}
    </Radio.Group>
     </div>

     {/* ===============reset button========== */}
     <button className='btn btn-danger my-4 w-100' onClick={()=>window.location.reload()}>Reset Filter</button>

        </div>
        <div className="col-md-9">
  <h1 className="text-center">All products</h1>

  <div className="d-flex flex-wrap">
    {products?.map((p) => (
      <div className="col-md-4" key={p._id}>
        <div className="card m-2">
          <img style={{width:"auto" ,height:"300px"}}
            src={`http://localhost:8080/get-photo/${p._id}`}
            alt={p.name}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{p.name}</h5>
            <h5 className="card-title text-warning">{p.price}</h5>
            <p className="card-text">{p.description.substring(0,30)}</p>
            <div className="d-flex">
            <button className="btn btn-primary mx-2" onClick={()=>navigate(`/product/${p.slug}`)}>View</button>
            <button className="btn btn-secondary" onClick={()=>{
              setcart([...cart,p])
              toast.success("item-added")
              localStorage.setItem(cart,JSON.stringify([...cart,p]))
              }}>Add to cart <FaCartArrowDown /></button>
            </div>
            
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
 <Offer/>
 <hr />
 <NewsLetter/>

 <hr />
 <footer>
 <p className='text-center'>Copyright-2024 &copy; : All right reserved</p>
 </footer>

   </>
  )
}

export default Home
