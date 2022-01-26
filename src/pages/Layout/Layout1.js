import React, { Component } from "react";
import Navbar from '../../components/Navbar';
import Home from '../Home/Home';
import Products from '../Products';
import About from '../About';
import Cart from '../Cart';
import Contact from '../Contact';
import Account from '../Account';
import Footer from '../../components/Footer';
import { Switch, Route, Routes } from "react-router-dom";
// import Profile from './children/Profile';

const Layout1 = () => {
  console.log(window.location)
  return (
    <>
    <div className="App">
      <Navbar home={window.location.pathname === "/"} />
      <div className='page-container'>
    <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/account" element={<Account/>}></Route>
            <Route path="/product" element={<Products/>}> </Route> 
            {/* <Route path="/profile" element={<Profile/>}> </Route>   */}
        </Routes>
        </div>
        <Footer/>
    </div>
    </>
  );
}

export default Layout1;