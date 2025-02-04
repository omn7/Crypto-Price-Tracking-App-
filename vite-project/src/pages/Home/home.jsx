import React, { useContext, useEffect, useState } from 'react';
import './Home.css'
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom'

const Home = () => {
    const {allCoin, currency} = useContext(CoinContext)
    const [displayCoin, setDisplayCoin] = useState([]);
    const [input, setInput] = useState('');

    const inputHandler = (event) => {
        setInput(event.target.value);
        if(event.target.value === ''){
            setDisplayCoin(allCoin)
        }
    }
    const searchHandler = async (event) => {
        event.preventDefault();
      const coins =  await allCoin.filter((item)=>{
          return item.name.toLowerCase().includes(input.toLowerCase())
        })
        setDisplayCoin(coins);
    }

    useEffect(()=>{
        setDisplayCoin(allCoin);
    }, [allCoin])
    return (
        <div className='home'>
            <div className='hero'>
                <h1> Hello! <br></br>Welcome to the crypto marketplace.</h1>
                <p> by Om Narkhede explore more about cryptos.</p>
                <form onSubmit={searchHandler}>
                    <input onChange={inputHandler} value={input} type="text" placeholder='search crypto...' required />
                    <button type='submit'>Search</button>
                </form>
            </div>
            <div className="crypto-table">
            <div className="crypto-layout">
                <p>#</p>
                <p>Coin</p>
                <p>Prise</p>
                <p style={{textAlign: 'center'}}>24H Change</p>
                <p className='market-cap'>Market Cap</p>

            </div>
            {
                displayCoin.slice(0, 10).map((item, index)=>{
                    return (
                        <div>
                        <Link to={`/coin/${item.id}`} className="crypto-layout" key={index}>
                            <p>{item.market_cap_rank}</p>
                            <div>
                            <img src={item.image} alt="" />
                            <p>{item.name + '-' + item.symbol}</p>
                            </div>
                            <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                            <p className={item.price_change_percentage_24h>0?"green":"red"}>

                                {Math.floor(item.price_change_percentage_24h* 100)/100}</p>
                            <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
                            
                        </Link>
                        </div>
                    );
                })
            }
            </div>
        </div>
    );
};

export default Home;