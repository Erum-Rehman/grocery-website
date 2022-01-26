import React, { Component } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Products from './pages/Products';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";
import Error from './pages/Error';
import Login from "./components/RegistrationLogin/Login";
import Register from "./components/RegistrationLogin/Register";
import LoginForm from "./pages/LoginForm";
import ProductSidebar from "./pages/ProductSidebar";
import Logout from '../src/children/Logout';
import Profile from '../src/children/Profile';
import Dashboard from '../src/children/Dashboard';
import Order from '../src/children/Order';

function App() {
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
            <Route path="/logout" element={<Account/>}></Route>
            <Route path="/profile" element={<Account/>}></Route>
            <Route path="/dashboard" element={<Account/>}></Route>
            <Route path="/order" element={<Account/>}></Route>
            <Route path="/product" element={<Products/>}> </Route> 
            <Route  path="/error" element={<Error/>}/> 
            <Route  path="/login" element={<LoginForm/>}/> 
            <Route  path="/register" element={<LoginForm/>}/> 
            <Route  path="/ProductSidebar" element={<ProductSidebar/>}/>
        </Routes>
        </div>
        <Footer/>
    </div>
    </>
  );
}

export default App;

