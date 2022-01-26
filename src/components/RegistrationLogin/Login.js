import React, { Component } from "react";
import './index.css';
import Background from '../../components/Background';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButnField from "../../components/Button";

const Login = () => {
    return(
        <>
        <div className="login-container">
                <h2 style={{marginBottom: '20px', textAlign: 'center'}}>Login Your Account</h2>
                <div className="contact-cell">
                            <label>User Name *</label><br />
                            <input type="text" placeholder="Your first name" className="contact-field" />
                        </div>
                        <div className="contact-cell">
                            <label>Password *</label><br />
                            <input type="email" placeholder="***********" className="contact-field" />
                        </div>
                        <div className="contact-cell">
                        <input type="checkbox" style={{marginRight: '15px'}}/>
                        <span style={{float: 'right'}}>Forgotten Password?</span>
                            <label style={{color: "#505050", fontSize: '17px', fontWeight: '500'}}>
                               Remember Me</label>
                              
                           
                        </div>
                        <ButnField title="LOGIN ACCOUNT"/>
                    
                </div>
        </>
    )
}
export default Login;
