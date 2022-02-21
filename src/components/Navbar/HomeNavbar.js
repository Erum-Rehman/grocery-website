import React, { useState } from 'react';
import './App.css';
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

const HomeNavbar = () => {
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
            <PersistentDrawerRight open={iscartBag} handleCartClose={handleCartClose}/>
            <PersistentDrawerLeft open={isOpen} handleMenuClose={handleMenuClose} />
            <div className="main-header">

                <div className="nav-logo">
                    <img src={require("../../images/logo-2.png")} alt="" style={{ width: 129, height: 34 }} className='logo' />
                </div>
                <ul className="nav-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link> </li>
                    <li>
                        <DropdownButton
                            as={ButtonGroup}
                            key="down"
                            id={`dropdown-button-drop-down`}
                            drop="down"
                            variant="Light"
                            title={` Shop `}
                            className="dropdown-shop"
                        >
                            <Dropdown.Item href="" ><Link to="/product">Product</Link></Dropdown.Item>
                            <Dropdown.Item href=""><Link to="/productSidebar">Product Sidebar</Link></Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li>
                        <DropdownButton
                            as={ButtonGroup}
                            key="down"
                            id={`dropdown-button-drop-down`}
                            drop="down"
                            variant="Light"
                            title={` Pages `}
                        >
                            <Dropdown.Item href=""><Link to="/login">Login</Link></Dropdown.Item>
                            <Dropdown.Item href=""><Link to="/error">Error</Link></Dropdown.Item>
                        </DropdownButton>
                    </li>

                    <li ><Link to="/contact">Contact</Link> </li>
                </ul>
                <div className="nav-contact">
                    <div className='main-header-icons'>
                        <MenuIcon onClick={handleMenuClose} className='menu' />

                        <AiOutlineUser className="nav-icons" onClick={() => navigate("/account")} />
                        <div>
                        <AiOutlineShoppingCart className="nav-icons" onClick={handleCartClose}/>
                        <div className='cart-count'>{quantity}</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default HomeNavbar;
