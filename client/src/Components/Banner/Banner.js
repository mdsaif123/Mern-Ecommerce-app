import React from 'react'
import "./Banner.css"
import Search from '../Search'

const Banner = () => {
  return (
    <div>
      <div className='container-fluid hero'>
      <div className="row">
        <div className="col-lg-12 hero-left">
          <h2 className='text-white'>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hero-hand-icon d-flex align-items-center gap-3">
              <p className="m-0">new</p>
              <img src="" alt="" style={{width:"50px"}}/>
            </div>
            <p className='text-white d-flex'>collection for everyone</p>
                 <Search/>
          </div>
          {/* <div className="hero-latest-btn d-flex justify-content-center align-items-center gap-3">
            <div>Latest Collection</div>
            <img src="" alt="" />
          </div> */}
        </div>
      
      </div>
    </div>
      
    </div>
  )
}

export default Banner
