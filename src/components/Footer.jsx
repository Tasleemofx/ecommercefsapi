import React from 'react'
import { NavLink } from 'react-router-dom';
import Home from "./Home"
import About from "./About"

export default function Footer() {
    return (
      <footer className="row bg-info text-white">
        <div className="col-md-4">
          <NavLink to={Home} className="text-decoration-none">
            <h3 className="text-white">ShopJSX</h3>
          </NavLink>
          <p>Where fashion meets affordability</p>
        </div>
        <div className="col-md-4">
          <h4>Company</h4>
          <ul className="navbar-nav">
            <NavLink to={About} className="text-decoration-none">
              <li className="text-white">About Us</li>
            </NavLink>
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
