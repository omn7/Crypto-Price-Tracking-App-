import React, { useContext } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom'


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
       <Link to={`/`} >
    <img src={logo} alt="" className='logo'/>
    </Link>
        <ul>
        <Link to={`/`} >
        <li>Home</li> </Link>
         <Link to={`https://www.linkedin.com/in/omnarkhede/`} >
        <li>About</li> </Link>
        <Link to={`https://github.com/omn7`} >
        <li>Github</li> </Link>
        <li>Features</li>
    </ul>
    <div className="navright">
        <select onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="inr">INR</option>
            <option value="eur">EUR</option>
        </select>
        <Link to={`https://github.com/omn7/Crypto-Price-Tracking-App-`} >
        <button>Repo </button> </Link>
    </div>
    </div>
  );
};

export default Navbar;