import './App.css';
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrFacebookOption } from "react-icons/gr";
import {AiOutlineInstagram} from "react-icons/ai";
import {FaLinkedinIn, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <>
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
                        <div>
                            <img src={require("../../images/footer-logo.png")} alt="" style={{cursor: 'pointer'}}/>
                            <p>
                                Register Now To Get Update On Promotion And Coupons. Don’t Worry! It’s Not Spam</p>
                        </div>
                        <div><InputGroup className="mb-3 footer-input">
                            <FormControl
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button id="button-addon2" className='footer-butn'>
                                Button
                            </Button>
                        </InputGroup></div>
                        <div>
                            <ul className="social-list">
                                <li><GrFacebookOption className='social'/></li>
                                <li><AiOutlineInstagram className='social'/></li>
                                <li><FaLinkedinIn className='social'/></li>
                                <li><FaTwitter className='social'/></li>
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
                <p style={{color: '#efefef', fontWeight: '400', fontSize: '16px', margin: '35px 0 10px 0'}}>
                    Copyright 2021 EG-Shop Grocery | Design By Egens Lab</p>
            </div>

        </>
    )
}
export default Footer;