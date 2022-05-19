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


    // const { order: { shippingData, shippingData: { date, totalPrice, orderId, name, contact, address, city, code, quantity, products } } } = useSelector(state => state);
    const {date, totalPrice, orderId, name, contact, address, city, code, quantity, products} = location.state;
    return (
        <>
            <Background title="Order Details" />
            <div className="user_orders">
                <h2 className="orders_head">ORDER DETAILS</h2>
                <p>name: {name}</p>
                <p>contact: {contact}</p>
                <p>address: {address}</p>
                <p>city: {city}</p>
                <p>Post code: {code}</p>
                <p>quantity: {quantity}</p>
                <p>Order Date: {date}</p>
                {
                    products.map((item, index) => (
                        <div key={item} className='orders-items'>
                            <img src={`${window.location.origin}/${item.image}`} className="orders-image" />
                            <div className='orders-name'>
                                <h5 className="orders-title">{item.name}</h5>
                                <div className='orders-item-count'>
                                    <h3 className="order_count">Count: <span>{item.count}</span></h3>
                                </div>
                                <h3 className="orders_price">Price: <span >{item.totalPrice}</span></h3>
                            </div>
                        </div>
                    ))
                } 
                <p className='orders_total'>Subtotal: <span className="span_total">${totalPrice}</span></p>
            </div>
        </>
    )
}
export default Orders