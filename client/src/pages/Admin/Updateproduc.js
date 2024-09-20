
import React, { useState, useEffect } from "react";
import AdminMenu from "../../Components/AdminMenu";
import Navbar from "../../Components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate,useParams } from "react-router-dom";

const { Option } = Select; // Correct way to destructure Option

const Updateproduc = () => {

    const params=useParams()

    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [photo, setPhoto] = useState("");
    const [shipping, setShipping] = useState("");

    const [id ,setId]=useState("")

    //get single product

    const getSingleproduct=async()=>{
        try {
            const {data}=await axios.get(`http://localhost:8080/get-product/${params.slug}`)
            setId(data.product._id)
            setName(data.product.name)
            setCategory(data.product.category._id)
            setDescription(data.product.description)
            setPrice(data.product.price)
            setQuantity(data.product.quantity)
            
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(()=>{
         getSingleproduct()
         //eslint-disable-next-line
    },[])
  
    const navigate = useNavigate();
  
    const getAllCategory = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/get-category");
        if (data?.success) {
          setCategories(data.category);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong while getting categories");
      }
    };
  
    useEffect(() => {
      getAllCategory();
    }, []);
  
    // Create product
    const handleUpdate = async (e) => {
      e.preventDefault();
  
      try {
        const productData = new FormData();
        productData.append("name", name);
        productData.append("description", description);
        productData.append("price", price);
        productData.append("quantity", quantity);
        photo && productData.append("photo", photo);
        productData.append("category", category);
        productData.append("shipping", shipping);
  
        const { data } = await axios.put(
          `http://localhost:8080/update-product/${id}`,
          navigate("/dashboard/admin/products"),
          productData
        );
        if (data.success) {
          toast.success("Product Created Successfully");
         
        } else {
       
          toast.error(data.message || "Something went wrong");
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
  
    //delete product
    const handledelete=async()=>{
        try {
            let answer=window.prompt("are you sure to delete product")
            if(!answer) return 
            const {data}=await axios.delete(`http://localhost:8080/product/${id}`)
            toast.success("product deleted successfully")
            navigate("/dashboard/admin/products")
        } catch (error) {
            console.log(error)
            toast.error("some thing went wrong")
            
        }

    }
  return (
    <div>
      <Toaster />
      <Navbar />
      <div className="container p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center text-secondary">Update Product</h1>
            <div className="m-1">
              <Select
                bordered={false}
                placeholder="Select category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => setCategory(value)}
                value={category}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>

              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload images"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>

              <div className="mb-3">
                { photo ? (
                    <div className="text-center">
                        <img src={URL.createObjectURL(photo)} alt=""  height={"200px"} className="img img-responsive"/>
                    </div>
                ):(
                    <div className="text-center">
                        <img     src={`http://localhost:8080/get-photo/${id}`} alt=""  height={"200px"} className="img img-responsive"/>
                    </div>
                )

                }
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="Enter name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  value={description}
                  placeholder="Enter description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={price}
                  placeholder="Enter price"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={quantity}
                  placeholder="Enter quantity"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="mb-3 w-100">
                <Select
                  bordered={false}
                  placeholder="Select Shipping"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => setShipping(value)}
                  value={shipping?"yes":"no"}
                >
                  <Option value="0">NO</Option>
                  <Option value="1">YES</Option>
                </Select>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary mx-3" onClick={handleUpdate}>
                  Update Product
                </button>
                <button className="btn btn-danger" onClick={handledelete}>
                 Delete Product
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Updateproduc
