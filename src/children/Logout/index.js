import React, { Component } from "react";
import './index.css';

const Logout = () => {
    return (
        <>
                <div className="logout-container">
                    <div className="user-info">
                        <h5>Billing Address</h5>
                            <ul className="info">
                                <li>
                                    <span style={{display: 'flex'}}>First Name
                                        <small>:</small>
                                   Cameron </span></li>
                                    <li>
                                    <span style={{display: 'flex'}}>Last Name
                                        <small>:</small>
                                    Williamson</span></li>
                                    <li>
                                    <span style={{display: 'flex'}}>Address
                                        <small>:</small>
                                   Eight Avenue 487, London </span></li>
                                    <li>
                                    <span style={{display: 'flex'}}>Post code 
                                        <small>:</small>
                                   096895 </span></li>
                                    <li>
                                    <span style={{display: 'flex'}}>Country
                                        <small>:</small>
                                    London</span></li>
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