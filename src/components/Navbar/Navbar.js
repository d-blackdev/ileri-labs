import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import {motion} from 'framer-motion'

import Logo from "../../assets/images/Logo.svg";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setDropdown(false);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  const showDropdown = () => {
    setDropdown(!dropdown);
  };
  const hideDropdown = () => {
    closeMobileMenu();
    setDropdown(false);
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  const changeNavBarBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavBarBackground);
  return (
    // <IconContext.Provider value={{ color: "#fff" }}>

    <nav
      className={
        navbar ? "navbar-containers active" : "containers navbar-containers"
      }
    >
      <NavLink to="/" className="navbar-logo" onClick={hideDropdown}>
        <img src={Logo} alt="" />
      </NavLink>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      {/* NAV_DROPDOWN */}

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink exact className="nav-links" to="/" onClick={hideDropdown}>
            Home
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink
            exact
            className="nav-links"
            to="/get-a-kit"
            onClick={hideDropdown}
          >
            Get a test kit
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            className="nav-links"
            to="/what-we-do"
            onClick={hideDropdown}
          >
            What we do
          </NavLink>
        </li>
        <li className="nav-item nav_dropdown">
          <NavLink exact className="nav-links" to="/products">
            Products
            <FaChevronDown className="dropdown-icon" onClick={showDropdown} />
          </NavLink>
          {dropdown && (
            <div
              className={!dropdown ? `dropdown` : ` dropdown dropdown_active`}
            >
              <NavLink
                exact
                className="nav_dropdown_link"
                to="/products/sample-products"
                onClick={hideDropdown}
              >
                Sample Products
              </NavLink>
              <NavLink
                exact
                className="nav_dropdown_link"
                to="/products/skincare-products"
                onClick={hideDropdown}
              >
                Skincare Products
              </NavLink>
              <NavLink
                exact
                className="nav_dropdown_link"
                to="/products/haircare-products"
                onClick={hideDropdown}
              >
                Haircare Products
              </NavLink>
            </div>
          )}
        </li>
        <li className="nav-item">
          <NavLink
            exact
            className="nav-links"
            to="/blog"
            onClick={hideDropdown}
          >
            Blog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-links" to="/faq" onClick={hideDropdown}>
            FAQs
          </NavLink>
        </li>
        {/* BUTTON */}
        <li className="nav-btn">
          {button ? (
            <NavLink className="btn-link" to="#" onClick={hideDropdown}>
              <button className="btn-primary btn">SIGN IN</button>
            </NavLink>
          ) : (
            <NavLink className="btn-link" to="#" onClick={hideDropdown}>
              <button className="btn-mobile btn">SIGN IN</button>
            </NavLink>
          )}
        </li>
      </ul>
    </nav>

    // </IconContext.Provider>
  );
}

export default Navbar;
