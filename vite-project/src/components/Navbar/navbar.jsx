import React, { useContext } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { CoinContext } from '../../context/CoinContext';


const Navbar = () => {
  const {setCurrency} = useContext(CoinContext)
  const currencyHandler = (event)=> {
    switch (event.target.value){
      case 'usd': {
        setCurrency({name: 'usd', symbol: '$'})
        break;
      }
      case 'eur': {
        setCurrency({name: 'eur', symbol: '€'})
        break;
      }
      case 'inr': {
        setCurrency({name: 'inr', symbol: '₹'})
        break;
      }
      default: {
        setCurrency({name: 'usd', symbol: '$'})
        break;
      }
    }
  }

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
        <select onChange={currencyHandler}>
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