import React, { Component } from "react";
import './index.scss';
import { FiEye } from "react-icons/fi";

const MobileOrder = () => {
    return (
        <>
            <div style={{ marginTop: '50px' }}></div>
                    <div className="mobile-order" >
                        <div className="cart-div">
                            <p className="div-title">Order ID</p>
                            <div className="cart-name">#56986</div>
                        </div>
                        <div className="cart-div">
                            <p className="div-title">Order Date</p>
                            <div className="cart-name">21 August 2021</div>
                        </div>
                        <div className="cart-div">
                            <p className="div-title">Status</p>
                            <div className="cart-name">Pending</div>
                        </div>
                        <div className="cart-div">
                            <p className="div-title">Total</p>
                            <div className="cart-name">$ 985. 0789.00 for 85 Items</div>
                        </div>
                        <div className="cart-div">
                            <p className="div-title">Active</p>
                            <div className="dp"><FiEye /></div>
                        </div>
                    </div>
        </>
    )
}
export default MobileOrder;