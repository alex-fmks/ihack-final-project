import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../logo.svg";

function Navbar() {
  return (
    <div className="nav-header">
      <img src={Logo} alt="Header Logo" width="60px" />
      <div className="auth-btns">
        <nav>
          <Link to="/signup" />
          <button className="nav-sign-btn">Sign Up</button>
        </nav>
        <nav>
          <Link to="/" />
          <button className="nav-log-btn">Log In</button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
