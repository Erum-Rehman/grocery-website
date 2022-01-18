import React, { Component } from "react";
import './index.css';
import Nav from '../../components/Navbar/Nav'
import Footer from '../../components/Footer';
import Background from '../../components/Background';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineUser } from "react-icons/ai";
import { BiTachometer } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaUserCog } from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";
import { Link } from "@mui/material";
// import { Link } from "react-router-dom";
import Order from '../../children/Order';
import { FiEye } from "react-icons/fi";


const Account = () => {
    return (
        <>
        <Nav/>
        <Background title="My Account"/>
        <div className="about-container">
            <div className="account-container">
                <div className="account-reference col-lg-3">
                <Button id="button-addon2" className='account-butn'>
                        <BiTachometer className="account-icons"/>
                        Dashboard
                    </Button>
                    <Button id="button-addon2" className='account-butn'>
                        <AiOutlineUser className="account-icons"/>
                        My Profile
                    </Button>
                   
                    <Button id="button-addon2" className='account-butn'>
                        <HiOutlineShoppingBag className="account-icons"/>
                        My Order
                    </Button>
                   
                    <Button id="button-addon2" className='account-butn'>
                        <FaUserCog className="account-icons"/>
                        Account Settings
                    </Button>
                    <Button id="button-addon2" className='account-butn'>
                        <VscSignOut className="account-icons"/>
                        Logout
                    </Button>
                </div>
                <div className="account-preferences col-lg-9">
               
                   <h5 style={{textAlign: 'center'}}>Hi Erum Rehman</h5>
                   <div className="notification-div">
                   <div className="account-notification">
                       <h1 className="counter">0</h1>
                       <h5 className="counter-title">Pending</h5>
                   </div>
                   <div className="account-notification">
                       <h2 className="counter">0</h2>
                       <h5 className="counter-title">Processing</h5>
                   </div>
                   <div className="account-notification">
                       <h2 className="counter">0</h2>
                       <h5 className="counter-title">Picked</h5>
                   </div>
                   <div className="account-notification">
                       <h2 className="counter">0</h2>
                       <h5 className="counter-title">Complete</h5>
                   </div> 
                   </div>
                  
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Account