import React, { Component } from "react";
import './index.css';
import Nav from '../../components/Navbar/Nav'
// import { TiTimes } from "react-icons/ti";
import Footer from '../../components/Footer';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    return (
        <>
        <Nav/>
        <div className="about-container">
            <h2>Contact Us</h2>
            <div>
                <label>Name</label>
                <input type="text" placeholder="enter your name"/>
            </div>
        </div>
        </>
    )
}
export default Contact