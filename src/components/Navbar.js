import React from "react";
import "../styles/Navbar.css";
import logo from '../assets/prototype-logo.svg';
import search from '../assets/search.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logoWrapper">
      <img src={logo} alt="logo" height='30px' />
      </div>
      <div className='navbar__searchBar'>
          <img src={search} height='17px'/>
          <input type="text" placeholder='search'/>
      </div>
      <div className='navbar__Btn'>
          <button>Log In</button>
          <button className='navbar__Btn--black'>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
