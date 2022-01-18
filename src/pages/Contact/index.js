import React, { Component } from "react";
import './index.css';
import Nav from '../../components/Navbar/Nav'
// import { TiTimes } from "react-icons/ti";
import Footer from '../../components/Footer';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from '../../components/Background';

const Contact = () => {
    return (
        <>
        <Nav/>
       <Background title="Contact Us"/>
        <h2 className="contact-head">Contact Us</h2>
        <p style={{textAlign: 'center', color: '#848484'}}>For all enquiries, please email us using the form below</p>
        <div className="main-container">
           
            <div className="contact-container">
                <div className="contact-cell">
                <label>Your Name</label><br/>
                <input type="text" placeholder="enter your name" className="contact-field"/>
                </div>
              <div className="contact-cell">
                <label>Your Email</label><br/>
                <input type="email" placeholder="enter your email" className="contact-field"/>
                </div>
                <div className="contact-cell">
                <label>Your Message</label><br/>
                <textarea className="contact-msg" rows="3"></textarea>
                </div>
                <Button id="button-addon2" className='msg-btn'>
                        Send Message
                    </Button>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Contact