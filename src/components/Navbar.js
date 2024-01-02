import React from 'react';
import '../App.css'; // Assuming necessary styles for active link colors are in this file

const NavbarItem = ({ children, url, isActive }) => (
  <li className="nav-item me-3">
    <a
      className="nav-link"
      href={url}
      style={{
        color: '#fff', // White text for better visibility on blue
        padding: '10px 15px',
        backgroundColor: isActive
          ? '#007bff' // Blue background for active link
          : 'transparent',
        transition: 'background-color 0.3s ease', // Smooth hover transition
      }}
    >
      {children}
    </a>
  </li>
);

const Navbar = () => (
  <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">
          <img
            src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/100/000000/external-world-news-news-icongeek26-outline-gradient-icongeek26-1.png"
            alt="logo"
            width="30"
            height="30"
            className="me-2" // Spacing around the logo
          />
          <a className="navbar-brand" href="/">UPDATED NEWS</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <NavbarItem url="/" isActive={true}>
                Home
              </NavbarItem>
              <NavbarItem url="/">Latest News</NavbarItem>
              <NavbarItem url="/">Pricing</NavbarItem>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </>
);

export default Navbar;
