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
import { GoLocation } from "react-icons/go";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import Error from '../../pages/Error';
import LoginForm from '../../pages/LoginForm';
import Login from '../RegistrationLogin/Login';
import ProductDetails from '../../pages/ProductDetails';
import ProductSider from '../../pages/ProductSidebar';
import { useSelector } from "react-redux";
import MenuItem from '../MenuItem';
import FadeMenu from '../MenuItem';
import Orders from '../../pages/Orders';

const MobileFooter = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const [iscartBag, setIsCartBag] = useState(false)

    const { cart: { totalPrice, products, quantity }, userReducer: { user: { name } } } = useSelector(state => state);
    const handleDrawerClose = () => {
        setIsOpen(!isOpen)
    }
    const handleCartClose = () => {
        setIsCartBag(!iscartBag)
    }
    const handleMenuClose = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <PersistentDrawerRight open={iscartBag} handleCartClose={handleCartClose} />
            <PersistentDrawerLeft open={isOpen} handleDrawerClose={handleDrawerClose} handleMenuClose={handleMenuClose} />
            <div className='footer'>
                <div className='container-footer'>
                    <div className='footer-contact'>
                        <h3 className='abt-heading'>About EG Shop</h3>
                        <p>EG STORE - worldwide Grocery store since 2021.
                            We sell over 2000+ Category products on our web-site.</p>
                        <div className='contact-div'>
                            <BiPhoneCall className='phone' />
                            <div className='number'>
                                +1234 56781233<br />
                                +1234 45651343
                            </div>
                        </div>
                        <div className='contact-div'>
                            <AiOutlineMail className='phone' />
                            <div className='number'>
                                info@example.com<br />
                                support@example.com
                            </div>
                        </div>
                        <div className='contact-div'>
                            <GoLocation className='phone' />
                            <div className='number'>
                                3102 Bartlett Avenue<br />
                                Southfield, MI 48075
                            </div>
                        </div>
                    </div>
                    <div className='footer-socialsite'>
                        <div className='footer-img'>
                            <img src={require("../../images/footer-logo.png")} alt="" style={{ cursor: 'pointer' }} />
                            <p>
                                Register Now To Get Update On Promotion And Coupons. Don’t Worry! It’s Not Spam</p>
                        </div>
                        <div><InputGroup className="mb-3 footer-input">
                            <FormControl
                                placeholder="Your Email"
                                aria-label="Your Email"
                                aria-describedby="basic-addon2"
                            />
                            <Button id="button-addon2" className='footer-butn'>
                                Send
                            </Button>
                        </InputGroup>
                        </div>
                        <div>
                            <ul className="social-list">
                                <li><GrFacebookOption className='social' /></li>
                                <li><AiOutlineInstagram className='social' /></li>
                                <li><FaLinkedinIn className='social' /></li>
                                <li><FaTwitter className='social' /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='rules'>
                        <h2>Company</h2>
                        <ul className='terms'>
                            <li>Privacy Policy</li>
                            <li>Returns</li>
                            <li>Terms & Conditions</li>
                            <li>Our Support</li>
                            <li>Terms & Service</li>
                            <li>Checkout</li>
                            <li>Other Issues</li>
                        </ul>
                    </div>

                </div>
                <p className='copyright'>
                    Copyright 2021 EG-Shop Grocery | Design By Egens Lab</p>
            </div>

            <div className="mobile-footer">
                {/* <MenuIcon onClick={handleMenuClose} className='footer-icon' /> */}
                {!name ?
                    <AiOutlineUser className="footer-icon" onClick={() => navigate("/login")} />
                    : <FadeMenu MenuTitle={name} classname="mobileUser" options={[{ name: "Log Out" }, { name: "Account", href_link: "/account" },{name:"Orders", href_link: "/orders"}]} />
                }
                <AiOutlineHeart className="footer-icon" />
                <AiOutlineShoppingCart className="footer-icon" onClick={handleCartClose} />
                <div className='cart-count3'>{quantity}</div>
            </div>
        </>
    )
}
export default MobileFooter;
