import React, { useState } from 'react';
import './index.scss';
import PersistentDrawerLeft from '../Sidebar/index.js';
import PersistentDrawerRight from '../CartBag';
import CartBag from '../CartBag';
import MenuIcon from '@mui/icons-material/Menu';
import { width } from '@mui/system';
import Home from '../../pages/Home/Home';
import About from '../../pages/About';
import Cart from '../../pages/Cart';
import Product from '../../pages/Products'
import Contact from '../../pages/Contact';
import Account from '../../pages/Account';
import { BiPhoneCall } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from '../../pages/Error';
import LoginForm from '../../pages/LoginForm';
import Login from '../RegistrationLogin/Login';
import ProductDetails from '../../pages/ProductDetails';
import ProductSider from '../../pages/ProductSidebar';
import { Dropdown, DropdownButton, SplitButton, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const [iscartBag, setIsCartBag] = useState(false)

    const { cart: { totalPrice, products, quantity } } = useSelector(state => state);
    const handleMenuClose = () => {
        setIsOpen(!isOpen)
    }
    const handleCartClose = () => {
        setIsCartBag(!iscartBag)
    }

    return (
        <>
            {/* <PersistentDrawerRight open={iscartBag} handleCartClose={handleCartClose}/> */}
            <PersistentDrawerLeft open={isOpen} handleMenuClose={handleMenuClose} />
            <div className="main-header">

                <div className="nav-logo">
                    <img src={require("../../images/logo-2.png")} alt="" style={{ width: 129, height: 34 }} className='logo' onClick={() => navigate("/")}/>
                </div>
                
                <div className="nav-contact-home">
                    <div className='main-header-icons'>
                        <MenuIcon onClick={handleMenuClose} className='menu' />
                    </div>
                </div>
            </div>

        </>
    )
}
export default MobileNavbar;
