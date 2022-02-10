import React, { Component } from "react";
import './index.css';
import Footer from '../../components/Footer';
import Background from '../../components/Background';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineUser } from "react-icons/ai";
import { BiTachometer } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaUserCog } from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";
import Order from '../../children/Order';
import { FiEye } from "react-icons/fi";
import Profile from '../../children/Profile';
import Dashboard from '../../children/Dashboard'
import Logout from '../../children/Logout';
import { useLocation, useNavigate } from "react-router-dom";

const Account = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        
        <>
        <Background title="My Account"/>
        <div className="about-container">
            <div className="account-container">
                <div className="account-reference">
               
                <Button id="button-addon2" className='account-butn' onClick={() => navigate("/dashboard")}>
                        <BiTachometer className="account-icons"/>
                        Dashboard
                    </Button>
                   
                    <Button id="button-addon2" className='account-butn' onClick={() => navigate("/profile")}>
                        <AiOutlineUser className="account-icons"/>
                        My Profile
                    </Button>

                    <Button id="button-addon2" className='account-butn' onClick={() => navigate("/order")}>
                        <HiOutlineShoppingBag className="account-icons"/>
                        My Order
                    </Button>
                   
                    <Button id="button-addon2" className='account-butn' onClick={() => navigate("/logout")}>
                        <FaUserCog className="account-icons"/>
                        Account Settings
                    </Button>

                    <Button id="button-addon2" className='account-butn' onClick={() => navigate("/logout")}>
                        <VscSignOut className="account-icons"/>
                        Logout
                    </Button>
                </div>
                {location.pathname === "/dashboard" ? <Dashboard/>
                : location.pathname === "/profile" ? <Profile/>
                :location.pathname === "/order" ? <Order/>
                : <Logout/>}
            </div>
        </div>
        </>
    )
}
export default Account