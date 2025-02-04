import React, { useContext, useEffect, useState } from 'react';
import './Coin.css'
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';


const Coin = () => {
    const {coinId} = useParams();
    const [coinData, useCoinData] = useState();
    
    const {currency} = useContext(CoinContext)

    const fetchCoinData = async () => {
        const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
  .then(res => res.json())
  .then(res => useCoinData(res))
  .catch(err => console.error(err));    
    }

    

    useEffect(()=> {
        fetchCoinData();
    }, [currency])
    if(coinData){
        return (
            <div className="container">
            <div className='coin-name'>
                <img src={coinData.image.large} alt="" className="logo" />
                <p className="coin-title"><b>{coinData.name} {coinData.symbol.toUpperCase()}</b></p>
            </div>
            <div className="coin-details">
                <p className="coin-block-time">Block Time in Minutes: {coinData.block_time_in_minutes} Min</p>  
            </div>
            </div>
        );
    }else {
        return(
            <div className='spinner'>
            <div className="spin"></div>
            </div>
        )
    }

   
};

export default Coin;