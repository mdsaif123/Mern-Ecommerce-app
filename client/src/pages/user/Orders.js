import React from 'react'
import UserMenu from './UserMenu'
import Navbar from '../../Components/Navbar'

const Orders = () => {
  return (
    <div>
    <Navbar/>
      <div className="container mt-4">
        <div className="row">
            <div className="col-md-3">
                <UserMenu/>
            </div>
            <div className="col-md-9">
                <h2 className="text-center text-secondary">My Orders</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Orders
