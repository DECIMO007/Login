import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <nav className="navbar-container">
        <h2>WORLDWIDE</h2>
      <ul className="navbar-menu">

        <li>
          <Link to="/" className="navbar-link">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
