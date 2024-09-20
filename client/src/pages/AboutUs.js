import React from 'react'
import Navbar from '../Components/Navbar'



const AboutUs = () => {
  return (
  
    <div>
      <Navbar/>
      <div className="container my-5">
  <div className="row">
    <div className="col-md-6">
      <img  src="https://tse4.mm.bing.net/th?id=OIP.rY3tDVxuxnc9TVryg2vCDwHaE8&pid=Api&P=0&h=180" className="img-fluid rounded w-100" alt="About Us Image" />
    </div>
    <div className="col-md-6 d-flex align-items-center">
      <div>
        <h2>About Our E-commerce Platform</h2>
        <p>Welcome to our e-commerce website, where you can find the latest products at the best prices. Our platform is dedicated to providing a seamless shopping experience with a wide range of products from various categories, including electronics, fashion, home essentials, and more.</p>
        <p>Our mission is to bring the best deals directly to your fingertips, ensuring a secure and hassle-free shopping experience. We are committed to customer satisfaction and continuously strive to improve our services to meet your needs.</p>
        <p>Thank you for choosing us as your trusted shopping destination!</p>
      </div>
    </div>
  </div>
</div>
   

   
    </div>
  )
}

export default AboutUs
