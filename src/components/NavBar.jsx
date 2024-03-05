// Use this code to replace your existing React component
import React, { useState } from "react";
import logo from "../assets/logo.png";
import '../components/css/style.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className={click ? "links active" : "links"}>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/about">
          <h1>About</h1>
        </Link>
        <Link to="/services">
          <h1>Services</h1>
        </Link>
        <h1>Contact</h1>
        <Link to="/login">
          <h1>Login</h1>
        </Link>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
