import React, { useEffect, useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

const Spinner = () => {

    const [count,setCount]=useState(3)
    const navigate=useNavigate()
    const location=useLocation()

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount((prevValue)=> --prevValue)

        },1000)
        count === 0 && navigate('/login',{
            state:location.pathname,
        })
        return ()=> clearInterval(interval)
    },[count,navigate,location])
  return (
    <>
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
    <h1 className="text-center">redirecting to you in {count} seconds</h1>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  </>

      

  )
}

export default Spinner
