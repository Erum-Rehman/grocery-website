import React, { Component } from "react";
import './index.css';
import Background from '../../components/Background';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButnField from "../../components/Button";
import Login from "./Login";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";

const Registration = () => {
    return (
        <>
            <div className="login-container">
                <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Register Your account</h2>
                <div className="contact-cell">
                    <label>First Name *</label><br />
                    <input type="text" placeholder="Your first name" className="contact-field" />
                </div>
                <div className="contact-cell">
                    <label>Last Name *</label><br />
                    <input type="text" placeholder="Your last name" className="contact-field" />
                </div>
                <div className="contact-cell">
                    <label>Email *</label><br />
                    <input type="email" placeholder="Enter your email" className="contact-field" />
                </div>
                <div className="contact-cell">
                    <label>Password *</label><br />
                    <input type="email" placeholder="***********" className="contact-field" />
                    <label className="password-login"><FiEye /></label>
                </div>

                <div className="contact-cell">
                    <label>Confirm Password *</label><br />
                    <input type="email" placeholder="***********" className="contact-field" />
                    <label className="password-login"><FiEye /></label>
                </div>
                <div className="contact-cell">
                    <input type="checkbox" style={{ marginRight: '15px' }} />
                    <label style={{ color: "#505050", fontSize: '17px', fontWeight: '500' }}>
                        I agree to the Terms &amp; Policy</label>

                </div>
                <ButnField title="CREATE AN ACCOUNT" />
            </div>
        </>
    )
}
export default Registration;