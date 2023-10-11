import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navigation = () => {
  const width = window.innerWidth;
  const mobile = width < 600 ? true : false;
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="logo" className="logo-img" />
        </div>
        {!mobile ? (
          <div className="nav-links">
            <ul className="lists">
              <li>Why us</li>
              <li>Services</li>
              <li>application</li>
              <li>Doctors</li>
              <li>FAQ</li>
              <li>News</li>
            </ul>
            <div className="auth-links">
              <button>
                <Link to="/register">Register</Link>
              </button>
              <button>
                <Link to="/login">login</Link>
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="toggle" onClick={() => setToggle(true)}>
              <BiMenuAltLeft />
            </div>
            {toggle && (
              <div className="nav-links-mobile">
                <AiFillCloseCircle
                  className="close-menu"
                  onClick={() => setToggle(false)}
                />
                <ul className="lists-mobile">
                  <li>Why us</li>
                  <li>Services</li>
                  <li>application</li>
                  <li>Doctors</li>
                  <li>FAQ</li>
                  <li>News</li>
                </ul>
                <div className="auth-links-phone">
                  <button>
                    <Link to="/register">Register</Link>
                  </button>
                  <button>
                    <Link to="/login">login</Link>
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
