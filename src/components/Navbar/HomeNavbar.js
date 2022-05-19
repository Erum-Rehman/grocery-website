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
import Registration from '../RegistrationLogin/Register';
import ProductDetails from '../../pages/ProductDetails';
import ProductSider from '../../pages/ProductSidebar';
// import { Dropdown, DropdownButton, SplitButton, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import FadeMenu from '../MenuItem';
// import Orders from '../../pages/Orders';
import Order from '../../children/Order';

const HomeNavbar = ({signOutUser}) => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const [iscartBag, setIsCartBag] = useState(false)

    const { cart: { totalPrice, products, quantity }, userReducer: { user: { name } } } = useSelector(state => state);

    const handleMenuClose = () => {
        setIsOpen(!isOpen)
    }
    const handleCartClose = () => {
        setIsCartBag(!iscartBag)
    }
    return (
        <>
            <PersistentDrawerRight open={iscartBag} handleCartClose={handleCartClose} />
            <PersistentDrawerLeft open={isOpen} handleMenuClose={handleMenuClose} />
            <div className="main-header">
                <Link to="/">
                    <div className="nav-logo">
                        <img src={require("../../images/logo-2.png")} alt="" style={{ width: 129, height: 34 }} className='logo' />
                    </div>
                </Link>
                <ul className="nav-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link> </li>
                    <li><Link to="/product">Shop</Link></li>
                    <li><FadeMenu MenuTitle="Pages" classname="pages" options={[{name: "Login", href_link: "/login"}]} /></li>
                    <li ><Link to="/contact">Contact</Link> </li>
                </ul>
                <div className="nav-contact-home">
                    <div className='main-header-icons'>
                        <MenuIcon onClick={handleMenuClose} className='menu' />
                        {!name ?
                            <AiOutlineUser className="nav-icons" onClick={() => navigate("/register")} />
                            : <FadeMenu MenuTitle={name} classname="usericon"  options={[{name:"Log Out"},{name:"Account", href_link: "/account"} ,{name:"Order", href_link: "/order"} ]} />
                        }
                        <div>
                            <AiOutlineShoppingCart className="nav-icons" onClick={handleCartClose} />
                            <div className='cart-count'>{quantity}</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default HomeNavbar;
