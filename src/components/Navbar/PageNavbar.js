import React, { useState } from 'react';
import './App.css';
import PersistentDrawerLeft from '../Sidebar'
import MenuIcon from '@mui/icons-material/Menu';
import { width } from '@mui/system';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineUser,AiOutlineShoppingCart } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import Home from '../../pages/Home/Home';
import { Link,useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const PageNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const { cart: { totalPrice, products, quantity } } = useSelector(state => state);
    const handleDrawerClose = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <PersistentDrawerLeft open={isOpen} handleDrawerClose={handleDrawerClose} />
                <div className="page-header">
                    <div className="nav-logo">
                    <Link to="/">
                        <img src={require("../../images/logo-2.png")} alt="" style={{ width: 129, height: 34 }} className='logo' /></Link>
                    </div>
                    <div className='product-search'>
                        <InputGroup className="mb-3 nav-input">
                            <FormControl
                                placeholder="Search Product"
                                aria-label="Search Product"
                                aria-describedby="basic-addon2"
                            />
                            <Button id="button-addon2" className='nav-butn'>
                                Search
                            </Button>
                        </InputGroup>
                    </div>
                    <div className='icon-bar'>
                    <AiOutlineUser className="nav-icons" onClick={() => navigate("/account")}/>
                    <MenuIcon className="nav-icons" onClick={handleDrawerClose} />
                    <div>
                    <AiOutlineShoppingCart className="nav-icons"/>
                    <div className='cart-count-2'>{quantity}</div>
                    </div>
                    </div>
                    <div className="nav-contact">
                   
                            <BiPhoneCall className='nav-phone'/>
                            <div className='numbers'>
                                <span className="line-number">Hot Line Number</span>
                                <p style={{color: 'black', fontSize: '14px', fontWeight: '600'}}>+880 176 1111 456</p>
                            </div>
                    </div>
                </div>
        </>
    )
}
export default PageNavbar;
