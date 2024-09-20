import React from 'react'
import Navbar from '../Components/Navbar'


const Service = () => {
  return (
    <div>
    <Navbar/>
    <div className="container mt-5">
  <h1 className="text-center mb-4">Our Services</h1>
  <div className="row">
    {/* Fast Delivery Service */}
    <div className="col-md-4">
      <div className="card service-card">
        <div className="card-body">
          <div className="service-icon">
            <i className="bi bi-truck" />
          </div>
          <h5 className="card-title">Fast Delivery Service</h5>
          <p className="card-text">Get your orders delivered in record time!</p>
        </div>
      </div>
    </div>
    {/* 24/7 Customer Support */}
    <div className="col-md-4">
      <div className="card service-card">
        <div className="card-body">
          <div className="service-icon">
            <i className="bi bi-headset" />
          </div>
          <h5 className="card-title">24/7 Customer Support</h5>
          <p className="card-text">We're here for you, anytime, anywhere!</p>
        </div>
      </div>
    </div>
    {/* Easy Returns and Exchanges */}
    <div className="col-md-4">
      <div className="card service-card">
        <div className="card-body">
          <div className="service-icon">
            <i className="bi bi-arrow-return-right" />
          </div>
          <h5 className="card-title">Easy Returns and Exchanges</h5>
          <p className="card-text">Shop with confidence—returns made easy!</p>
        </div>
      </div>
    </div>
    {/* Secure Payment Options */}
    <div className="col-md-4 mt-4">
      <div className="card service-card">
        <div className="card-body">
          <div className="service-icon">
            <i className="bi bi-credit-card" />
          </div>
          <h5 className="card-title">Secure Payment Options</h5>
          <p className="card-text">Your security, our priority.</p>
        </div>
      </div>
    </div>
    {/* Personalized Shopping Experience */}
    <div className="col-md-4 mt-4">
      <div className="card service-card">
        <div className="card-body">
          <div className="service-icon">
            <i className="bi bi-person" />
          </div>
          <h5 className="card-title">Personalized Shopping Experience</h5>
          <p className="card-text">Shop smarter with personalized recommendations.</p>
        </div>
      </div>
    </div>
    {/* Loyalty and Rewards Program */}
    <div className="col-md-4 mt-4">
      <div className="card service-card">
        <div className="card-body">
          <div className="service-icon">
            <i className="bi bi-gift" />
          </div>
          <h5 className="card-title">Loyalty and Rewards Program</h5>
          <p className="card-text">Earn while you shop—exclusive rewards for loyal customers!</p>
        </div>
      </div>
    </div>
    {/* Gift Wrapping and Personalization */}
    <div className="col-md-4 mt-4">
      <div className="card service-card">
        <div className="card-body">
          <div className="service-icon">
            <i className="bi bi-box" />
          </div>
          <h5 className="card-title">Gift Wrapping and Personalization</h5>
          <p className="card-text">Add a personal touch to your gifts!</p>
        </div>
      </div>
    </div>
    {/* Best Price Guarantee */}
    <div className="col-md-4 mt-4">
      <div className="card service-card">
        <div className="card-body">
          <div className="service-icon">
            <i className="bi bi-tag" />
          </div>
          <h5 className="card-title">Best Price Guarantee</h5>
          <p className="card-text">Find a better price? We’ll match it!</p>
        </div>
      </div>
    </div>
  </div>
</div>


      
    </div>
  )
}

export default Service
