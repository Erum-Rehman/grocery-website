import React, { Component } from "react";
import './index.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
    return (
        <>
            <div className="about-container">
                <div className="account-container">
                    <div className="account-preferences col-lg-9">
                        <h5 className="profile" style={{marginBotton: '5px'}}>Profile</h5>
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
                            <label>Contact no *</label><br />
                            <input type="email" placeholder="XX-" className="contact-field" />
                        </div>
                        <div className="contact-cell">
                            <label>Address *</label><br />
                            <input type="email" placeholder="enter your email" className="contact-field" />
                        </div>
                        <div className="contact-cell">
                            <label>City *</label><br />
                            <select className="contact-field" >
                                <option value="expense" className="dropdown">Town/City </option>
                                <option value="expense" >Karachi </option>
                                <option value="income">Lahore</option>
                                <option value="income">Islamabad</option>

                            </select>
                        </div>
                        <div className="contact-cell">
                            <label>Zip Code</label><br />
                            <input type="text" placeholder="enter your name" className="contact-field" />
                        </div>
                        <div className="contact-cell">
                            <label>Country *</label><br />
                            <select className="contact-field" >
                                <option value="expense" className="dropdown">Pakistan </option>
                                <option value="expense" >India </option>
                                <option value="income">America</option>
                                <option value="income">London</option>

                            </select>
                        </div>
                        <div className="contact-cell">
                            <label>Password *</label><br />
                            <input type="email" placeholder="enter your email" className="contact-field" />
                        </div>
                        <div className="contact-cell">
                            <label>Confirm Password *</label><br />
                            <input type="email" placeholder="enter your email" className="contact-field" />
                        </div>
                        <Button id="button-addon2" className='msg-btn'>
                            Save Changes
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile;