import React from 'react'

export default function Footer() {
    return (
      <footer className="row bg-info text-white">
        <div className="col-md-4">
          <h3>ShopJSX</h3>
          <p>Where fashion meets affordability</p>
        </div>
        <div className="col-md-4">
          <h4>Company</h4>
          <ul className="navbar-nav">
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3>ShopJSX</h3>
          <ul className="navbar-nav">
            <li className="nav-item">Help</li>
            <li className="nav-item">Pricing</li>
            <li className="nav-item">Terms and Conditions</li>
            <li className="nav-item">Privacy policy</li>
          </ul>
        </div>
      </footer>
    );
}
