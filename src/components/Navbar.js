import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/prototype-logo.svg";
import search from "../assets/search.svg";
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logoWrapper">
        <Link to='/'> 
          <img src={logo} alt="logo" height="30px" />
        </Link>
      </div>
      <div className="navbar__searchBar">
        <img src={search} height="17px" />
        <input type="text" placeholder="search" />
      </div>
      <div className="navbar__Btn">
        <Button text='Sign In' path='/signin' />
        <Button text='Sign Up' path='/signup' bg='black' /> 
      </div>
    </nav>
  );
};

export default Navbar;
