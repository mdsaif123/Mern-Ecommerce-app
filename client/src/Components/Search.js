import React from "react";
import { useSearch } from "../context/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = () => {

    const [values,setvalue]=useSearch()
    const navigate=useNavigate()

    const handlesubmit=async(e)=>{
        e.preventDefault()
try {
    const {data}=await axios.get(`http://localhost:8080/search/${values.keyword}`)
    setvalue({...values,result:data})
    navigate("/search")
    
} catch (error) {
    console.log(error)
    
}
    }

    const [value,setvalues]=useSearch()
  return (
    <div>
      <form className="d-flex  my-2 w-100" role="search" onSubmit={handlesubmit}>
        <input
          className="form-control me-2 w-100"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={value.keyword}
          onChange={(e)=>setvalues({...value,keyword: e.target.value})}
        />
        <button style={{backgroundColor:"#ff6518"}} className="btn  my-3 text-white" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
