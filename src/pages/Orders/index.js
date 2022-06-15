import React, { useState, useEffect } from "react";
import './index.scss';
import Background from '../../components/Background';
import Products from '../../pages/Products';
import products from '../../mock/product';
import IncDec from "../../components/IncDec";
import { updateCartItem, removeCartItem } from '../../redux/Thunk/cart';
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const Orders = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const { date, totalPrice, orderId, name, contact, address, city, code, quantity, products, products: { p_name } } = location.state;
    return (
        <>
            <Background title="Order Details" />
            <div className="user_orders">
                <h2 className="orders_head">ORDER Receipt</h2>
                <div className="order_bar">
                    <div className="header_left">
                        <p className="order_para">Tel: 0342-1429379</p>
                        <p className="order_para">Defense Phase-II</p>
                    </div>
                    <div className="header_right">
                        <p className="order_para">Order# {orderId}</p>
                        <p className="order_para">Date:{date}</p>
                    </div>
                </div>
                <div className="main_order_div">
                    <div className="order_content">
                        <div className="O_qty">
                            <h4>Qty</h4>
                            <p>{quantity}</p>
                        </div>
                        <div className="footer-contact">
                            <h4>Description</h4>
                            {
                                products.map((item, index) => (
                                    <div key={item}>
                                        <p >{item.p_name}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="footer-contact">
                            <h4>Price</h4>
                            <p>{totalPrice}</p>
                        </div>
                    </div>
                    <div className="customer_details">
                        <h5 style={{ marginBottom: '27px' }}>PICKUP</h5>
                        <div className="customer_info">
                            <p style={{ fontSize: '17px', fontWeight: '500' }}>Name: </p>
                            <span style={{ fontSize: '17px', fontWeight: '500', color: '#adadad', paddingLeft: '4%' }}>{name}</span>
                        </div>
                        <div className="customer_info">
                            <p style={{ fontSize: '17px', fontWeight: '500' }}>Phone No: </p>
                            <span style={{ fontSize: '17px', fontWeight: '500', color: '#adadad', paddingLeft: '4%' }}>{contact}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Orders