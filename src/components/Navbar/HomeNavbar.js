import React, { useState } from 'react';
import './App.css';
import PersistentDrawerLeft from '../Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import { width } from '@mui/system';
import Home from '../../pages/Home/Home';
import About from '../../pages/About';
import Cart from '../../pages/Cart';
import Product from '../../pages/Products'
import Contact from '../../pages/Contact';
import Account from '../../pages/Account';
import { BiPhoneCall } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from '../../pages/Error';
import LoginForm from '../../pages/LoginForm';
import ProductSider from '../../pages/ProductSidebar';
import { Dropdown, DropdownButton, SplitButton, ButtonGroup } from "react-bootstrap";

const HomeNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleDrawerClose = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <PersistentDrawerLeft open={isOpen} handleDrawerClose={handleDrawerClose} />
            <div className="main-header">

                <div className="nav-logo">

                    <MenuIcon onClick={handleDrawerClose} className='menu' />
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
                            <Dropdown.Item href=""><Link to="/product">Product Details</Link></Dropdown.Item>
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
                            <Dropdown.Item href=""><Link to="/account">My Account</Link></Dropdown.Item>
                            <Dropdown.Item href=""><Link to="/cart">Cart</Link></Dropdown.Item>
                            <Dropdown.Item href=""><Link to="/loginform">Login</Link></Dropdown.Item>
                            <Dropdown.Item href=""><Link to="/product">Checkout</Link></Dropdown.Item>
                            <Dropdown.Item href=""><Link to="/error">Error</Link></Dropdown.Item>
                        </DropdownButton>
                    </li>

                    <li ><Link to="/contact">Contact</Link> </li>
                </ul>
                <div className="nav-contact">
                    <BiPhoneCall className='nav-phone' />
                    <div className='numbers'>
                        <span className="line-number">Hot Line Number</span>
                        <p style={{ color: 'black', fontSize: '14px', fontWeight: '600' }}>+880 176 1111 456</p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default HomeNavbar;
