import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import arrow from '../../assets/arrow.png';

const Navbar = () => {
  return (
    <div className='navbar'>
    <img src={logo} alt="" className='logo'/>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Github</li>
        <li>Features</li>
    </ul>
    <div className="navright">
        <select>
            <option value="usd">USD</option>
            <option value="inr">INR</option>
            <option value="eur">EUR</option>
        </select>
        <button>Sign Up </button>
    </div>
    </div>
  );
};

export default Navbar;