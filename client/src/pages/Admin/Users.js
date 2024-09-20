import React from 'react'
import AdminMenu from '../../Components/AdminMenu'
import Navbar from '../../Components/Navbar'

const Users = () => {
  return (
    <div>
    <Navbar/>
    <div className="container p-3">
        <div className="row">
            <div className="col-md-3">
                <AdminMenu/>
            </div>
            <div className="col-md-9">
                <h1 className='text-center text-secondary'>All Users</h1>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Users
