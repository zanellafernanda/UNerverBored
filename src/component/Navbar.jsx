import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-link">
          UNerverBored
        </a>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="/" className="navbar-link">
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
