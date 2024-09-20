import React from 'react'
import Navbar from '../Components/Navbar'

const Contact = () => {
  return (
    <div>
    <Navbar/>
      <div className="containe mt-4">
      <div className="row">
        <img src="https://gifographics.co/wp-content/uploads/2017/01/contact-us.gif" alt="" />
      </div>
        <div className="row mt-3">
            <div className="col-md-6 text-center">
                <img style={{width:"500px"}} className='rounded' src="https://www.meshini.com/themes/meshini-v3/assets/img/icons/contact_us.png" alt="" />
            </div>
            <div className="col-md-6">
            <div className="contact-info mt-5">
        <h3>Contact Information</h3>
        <p><span className="icon"><i className="bi bi-telephone" /></span> Phone: +1 234 567 890</p>
        <p><span className="icon"><i className="bi bi-envelope" /></span> Email: support@example.com</p>
        <p><span className="icon"><i className="bi bi-geo-alt" /></span> Address: 123 Example Street, City, Country</p>
        <p><span className="icon"><i className="bi bi-clock" /></span> Working Hours: Mon - Fri, 9 AM - 6 PM</p>
      </div>
            </div>
        </div>
      </div>
      <hr />
 <footer>
 <p className='text-center'>Copyright-2024 &copy; : All right reserved</p>
 </footer>

    </div>
  )
}

export default Contact
