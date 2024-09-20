import React from 'react'
import Navbar from '../../Components/Navbar'
import UserMenu from './UserMenu'
import { useAuth } from '../../context/authcontext'

const Dashboard = () => {

  const [auth]=useAuth()
  return (
    <div>
    <Navbar/>
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <UserMenu/>
      </div>
      <div className="col-md-9">
        <div className="card  p-3">
        <h3>Name:{auth?.user?.name}</h3>
        <h3>Email:{auth?.user?.email}</h3>
        <h3>Address:{auth?.user?.addres}</h3>

        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Dashboard
