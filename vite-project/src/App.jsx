import React from 'react';
import Navbar from './components/Navbar/navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Coin from './pages/Coin/coin'
import Footer from './components/footer/footer.jsx';

const App = () => {
  return (
    <div className='app'>
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/coin/:coinId' element={<Coin/>}></Route>
     </Routes>
     <Footer/>
    </div>
  );
};

export default App;