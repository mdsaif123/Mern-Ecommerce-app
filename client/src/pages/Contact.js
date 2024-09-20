import React from 'react'
import Navbar from '../Components/Navbar'

const Contact = () => {
  return (
    <div>
    <Navbar/>
      <div className="containe mt-4">
        <div className="row">
            <div className="col-md-6 text-center">
                <img style={{width:"500px"}} className='rounded' src="https://image6.slideserve.com/11606334/conatct-us-l.jpg" alt="" />
            </div>
            <div className="col-md-6">
            <div className="contact-info">
        <h3>Contact Information</h3>
        <p><span className="icon"><i className="bi bi-telephone" /></span> Phone: +1 234 567 890</p>
        <p><span className="icon"><i className="bi bi-envelope" /></span> Email: support@example.com</p>
        <p><span className="icon"><i className="bi bi-geo-alt" /></span> Address: 123 Example Street, City, Country</p>
        <p><span className="icon"><i className="bi bi-clock" /></span> Working Hours: Mon - Fri, 9 AM - 6 PM</p>
      </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
