import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div id="app-title">Heading North</div>
      <nav className="navbar">
        <ul className="navbar-list">
          <Link to="/">
            <li className="navbar-item">Home</li>
          </Link>

          <Link to="/login">
            <li className="navbar-item">Login</li>
          </Link>

          <Link to="/register">
            <li className="navbar-item">Register</li>
          </Link>
          
          <Link to="/api/users/users">
            <li className="navbar-item">Users</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;