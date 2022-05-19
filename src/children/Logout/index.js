import React, { Component } from "react";
import './index.scss';
import { useSelector, useDispatch } from "react-redux";

const Logout = () => {

    const { order: { shippingData, shippingData: { date, totalPrice, orderId, name, contact, address, city, code, country, quantity, products } } } = useSelector(state => state);

    return (
        <>
                <div className="logout-container">
                    <div className="user-info">
                        <h5>Billing Address</h5>
                            <ul className="info">
                                <li>
                                    <span style={{display: 'flex'}}>Full Name
                                        <small>:</small>
                                   {name} </span></li>
                                   <li>
                                    <span style={{display: 'flex'}}>Address
                                        <small>:</small>
                                   {address} </span></li>
                                    <li>
                                    <span style={{display: 'flex'}}>Post code 
                                        <small>:</small>
                                   {code}</span></li>
                                    <li>
                                    <span style={{display: 'flex'}}>Country
                                        <small>:</small>
                                    {country}</span></li>
                                    <li>
                                    <span style={{display: 'flex'}}>Contact
                                        <small>:</small>
                                    {contact}</span></li>
                                    <li>
                                    <span style={{display: 'flex'}}>City
                                        <small>:</small>
                                    {city}</span></li>
                            </ul>
                    </div>
                           
                       
                    <div className="user-info">
                        <h5>Shipping Address</h5>
                        <p className="info">
                            First Name : Cameron<br/>
                            Last Name : Williamson<br/>
                            Address : Eight Avenue 487, London<br/>
                            Post code : 096895<br/>
                            Country : London
                            </p>
                    </div>
                </div>

        </>
    )
}
export default Logout;