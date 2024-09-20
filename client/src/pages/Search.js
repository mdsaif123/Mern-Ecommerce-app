import React from 'react'
import Navbar from '../Components/Navbar'
import { useSearch } from '../context/Search'

const Search = () => {
    const [values,setvalues]=useSearch()
  return (
    <div>
    <Navbar/>
    <div className="container">
        <div className="text-center">
            <h1>Search result </h1>
            <h6>{values?.result.length < 1 ? "No Product found":`${values?.result.length}`}</h6>

            <div className="d-flex flex-wrap">
    {values?.result.map((p) => (
      <div className="col-md-4" key={p._id}>
        <div className="card m-2">
          <img style={{width:"200px"}}
            src={`http://localhost:8080/get-photo/${p._id}`}
            alt={p.name}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{p.name}</h5>
            <h5 className="card-title text-warning">{p.price}</h5>
            <p className="card-text">{p.description.substring(0,30)}</p>
            <div className="d-flex">
            <button className="btn btn-primary mx-2">View</button>
            <button className="btn btn-secondary">Add to cart</button>
            </div>
            
          </div>
        </div>
      </div>
    ))}
  </div>
        </div>
    </div>
      
    </div>
  )
}

export default Search
