import { MdLogin } from "react-icons/md";
import { FaCartArrowDown, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

import Products from "./Products";

export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand fw-4 fs-4" to="/">
            StoreJSX
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item m-3">
                <Link className="nav-a active" aria-current="page" to='/'>
                  Home
                </Link>
              </li>
              <li className="nav-item m-3">
                <Link className="nav-a" to="/Products">
                  Products
                </Link>
              </li>
              <li className="nav-item m-3">
                <Link className="nav-a" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item m-3">
                <Link className="nav-a" to="/">
                  Contact
                </Link>
              </li>
              <div className="btn">
                <Link to="/" className="btn btn-outline-dark ms-4">
                  <MdLogin />
                  Login
                </Link>
                <Link to="/" className="btn btn-outline-dark ms-4">
                  <FaUserPlus />
                  Sign Up
                </Link>
                <Link to="/" className="btn btn-outline-dark ms-4">
                  <FaCartArrowDown />
                  Cart(0)
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    );
}
