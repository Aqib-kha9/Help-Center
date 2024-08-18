import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
const Navbar = () => {

  return (
    <>
      <nav className="nav-body">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="left-container">
              <img
                src="https://cdn.prod.website-files.com/5ff3926f03b3ba26b7d639cb/60c388bf3c3ae4d1d10653e7_Abstract_Wordmark-White.svg"
                alt=""
              />
            </div>
            <span className="help">&#124;</span>
            <Link to={"/"} className="help">
              Help Center
            </Link>
          </div>
          <Link to={"/add"} className="btn  btn-outline-light">Create a Card</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
