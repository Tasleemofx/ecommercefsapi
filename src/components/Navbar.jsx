
import { MdLogin } from "react-icons/md";
import { FaCartArrowDown, FaUserPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'




export default function Navbar() {
   const itemsArray = useSelector((state)=> state)
   
    return (
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand fw-4 fs-4" to="/">
              StoreJSX
            </NavLink>
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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2">
                <li className="nav-item m-3">
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item m-3">
                  <NavLink className="nav-link" to="/Products">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item m-3">
                  <NavLink className="nav-link" to="/About">
                    About
                  </NavLink>
                </li>
                <li className="nav-item m-3">
                  <NavLink className="nav-link" to="/">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className="btn">
                <NavLink to="/login" className="btn btn-outline-dark ms-4">
                  <MdLogin />
                  Login
                </NavLink>
                <NavLink to="/sign-up" className="btn btn-outline-dark ms-4">
                  <FaUserPlus />
                  Sign Up
                </NavLink>
                <NavLink to="/cart" className="btn btn-outline-dark ms-4">
                  <FaCartArrowDown />
                  Cart({itemsArray.length})
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      
    );
}
