import { MdLogin } from "react-icons/md";
import { FaCartArrowDown, FaUserPlus } from "react-icons/fa"
export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand fw-4 fs-4" href="go">
            StoreJSX
          </a>
          <div className="btn">
            <a href="" className="btn btn-outline-dark ms-4">
              <MdLogin />
              Login
            </a>
            <a href="" className="btn btn-outline-dark ms-4">
              <FaUserPlus />
              Sign Up
            </a>
            <a href="" className="btn btn-outline-dark ms-4">
              <FaCartArrowDown />
              Cart(0)
            </a>
          </div>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
