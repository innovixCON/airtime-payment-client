import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "../components/css/style.css";
import { FaBars, FaTimes } from "react-icons/fa";
import useAuthStore from "../components/hooks/UseAuthStore";
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const userData = JSON.parse( localStorage.getItem('UserData'))
  const { AuthStatus, setAuthStatus ,setAuthProfile} = useAuthStore();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    setAuthStatus(false);
    localStorage.removeItem('UserData')
    localStorage.removeItem('AuthToken')
    setAuthProfile({});
    navigate("/");
    window.location.reload();
  };

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const avatarLetter = userData?.email ? userData?.email.charAt(0).toUpperCase() : "";
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="Call Africa Logo" className="logo pb-2 pt-2" />
      </Link>
      <div className={click ? "links active" : "links"}>
        <NavLink exact to="/" label="Home" />
        <NavLink to="/about" label="About" />
        <NavLink to="/services" label="Services" />
        <NavLink to="/contactUs" label="Contact Us" />
        <div className="">
          {AuthStatus ? (
            <div className="avatar-dropdown">
              <Avatar onClick={toggleDropdown}>{avatarLetter}</Avatar>
              {showDropdown && (
                <div ref={dropdownRef} className="dropdown flex-col w-24">
                  <Link to="/dashboard/">Dashboard</Link>
                  <button >setting</button>
                  <button>profile</button>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="/login" label="Login" />
          )}
        </div>
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
};

const NavLink = ({ to, label }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  return (
    <Link to={to}>
      <h1 className={isActive ? "active-link" : ""}>{label}</h1>
    </Link>
  );
};

export default Navbar;