import React from 'react'
import Navbar from '../../Components/Navbar'
import AdminMenu from '../../Components/AdminMenu'
import { useAuth } from '../../context/authcontext'

const AdminDashboard = () => {
  const [auth]=useAuth()
  return (
    <div>
    <Navbar/>
 <div className="container m-3 p-3">
  <div className="row">
    <div className="col-md-3"><AdminMenu/></div>
    <div className="col-md-9">
      <div className="card w-75 p-3">
        <h3>Admin name:{auth?.user?.name}</h3>
        <h3>Admin Email:{auth?.user?.email}</h3>
        <h3>Admin Contact:{auth?.user?.contact}</h3>

      </div>
    </div>
  </div>
 </div>
      
    </div>
  )
}

export default AdminDashboard
