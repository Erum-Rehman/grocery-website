import React, { Component } from "react";
import './index.scss';
import Background from '../../components/Background';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TiTimes } from "react-icons/ti";
import IncDec from "../../components/IncDec";
import { useSelector, useDispatch } from "react-redux";
import { updateCart, removeFromCart } from '../../redux/Action';

const Checkout = () => {
    const dispatch = useDispatch();
    const { cart: { totalPrice, products, quantity } } = useSelector(state => state);

    const increment = (item) => {
        item.count = item.count ? item.count + 1 : 1;
        dispatch(updateCart(item));
    }

    const decrement = (item) => {
        item.count = item.count > 1 ? item.count - 1 : 1;
        dispatch(updateCart(item));
    }
    const removeItem = (index) => {
        dispatch(removeFromCart(index));
    }
    return (
        <>
            <Background title="Checkout" />
            <div className="checkout-container">
                <div className="checkout-left">
                    <div className="billing-details">
                        <h5 className="profile" style={{ marginBotton: '5px' }}>Billing Details</h5>
                        <div className="contact-cell">
                            <label>First Name </label><br />
                            <input type="text" placeholder="Your first name" className="contact-field" />
                        </div>
                        <div className="contact-cell">
                            <label>Last Name </label><br />
                            <input type="text" placeholder="Your last name" className="contact-field" />
                        </div>
                        <div className="contact-cell">
                            <label>Country / Region</label><br />
                            <input type="text" placeholder="Your country name" className="contact-field" />
                        </div>
                        <div className="contact-cell">
                            <label>Street Address</label><br />
                            <input type="text" placeholder="House and street name" className="contact-field" />
                        </div>
                        <div className="contact-cell">
                            <label>Address </label><br />
                            <input type="text" placeholder="enter your address" className="contact-field" />
                        </div>
                        <div className="contact-cell">
                            <select className="contact-field" >
                                <option value="expense" className="dropdown">Town/City </option>
                                <option value="expense" >Karachi </option>
                                <option value="income">Lahore</option>
                                <option value="income">Islamabad</option>

                            </select>
                        </div>
                        <div className="contact-cell">
                            <input type="text" placeholder="Post Code" className="contact-field" />
                        </div>
                        <div className="contact-cell">
                            <label>Additional Information </label><br />
                            <input type="number" placeholder="Your Phone Number" className="contact-field" />
                        </div>
                        <div className="contact-cell">
                            <input type="email" placeholder="Your Email Address" className="contact-field" />
                        </div>
                        <div className="contact-cell">
                            <textarea className="contact-msg" rows="6" placeholder="Order Notes (optional)"></textarea>
                        </div>
                    </div>
                    <div className="shipping-details">
                        <h5 className="profile" style={{ marginBotton: '5px' }}>Ship to a Different Address?</h5>
                        <div className="contact-cell">
                            <label>First Name </label><br />
                            <input type="text" placeholder="Your first name" className="contact-field" />
                        </div>
                        <div className="contact-cell">
                            <label>Last Name </label><br />
                            <input type="text" placeholder="Your last name" className="contact-field" />
                        </div>
                        <div className="contact-cell">
                            <textarea className="contact-msg" rows="6" placeholder="Order Notes (optional)"></textarea>
                        </div>
                    </div>
                </div>
                <div className="checkout-right">
                    <div className="order-summary">
                        <h5 className="profile" style={{ marginBotton: '5px' }}>Order Summary</h5>
                        {products.map((item, index) => (
                            <div className="order-side">
                                <div className="order-pic">
                                    <img src={item.image} className="cart-image" />
                                </div>
                                <div className="sale-content">
                                    <p className="order-title">{item.name}</p>
                                    <div className="checkout-product">
                                        <div className="checkout-inc">
                                            <IncDec onClickAdd={() => increment(item)}
                                                onClickRemove={() => decrement(item)}
                                                count={item.count} /></div>
                                        <TiTimes className="cancel"  />
                                        <span className="new-price">${item.discountPrice}/kg</span>
                                    </div>

                                </div>
                                <TiTimes className="del-order" onClick={() => removeItem(index)}/>
                            </div>
                        ))}
                    </div>
                    <div className="subtotal">
                        <div className="tax">
                            <h6>Subtotal</h6>
                            <span>${totalPrice}</span>
                        </div>
                        <div className="tax">
                            <span>Tax</span>
                            <span>$5</span>
                        </div>
                        <div className="tax-inc">
                            <span style={{ fontWeight: '400' }}>Total ( tax incl. )</span>
                            <span style={{ color: 'black' }}>${totalPrice}</span>
                        </div>
                    </div>
                    <div className="subtotal">
                        <div className="tax">
                            <h6>Total</h6>
                            <span>${totalPrice}</span>
                        </div>
                    </div>
                    <div className="order-summary">
                        <div className="payment-method">
                            <input type="radio" />
                            <label style={{ marginLeft: '8px' }}>Check Payments</label>
                            <p>
                                Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                            </p>
                        </div>
                        <div className="payment-method">
                            <input type="radio" />
                            <label style={{ marginLeft: '8px' }}>Cash on delivery</label>
                            <p>
                                Pay with cash upon delivery.
                            </p>
                        </div>
                        <div className="payment-method2">
                            <input type="checkbox" style={{ marginRight: '15px' }} />
                            <label style={{ color: "#505050", fontSize: '15px', fontWeight: '400' }}>
                                I have read and agree to the website</label>
                        </div>
                        <a className="conditions">Terms and Conditions</a>
                    </div>
                    <button className="order-btn">Place Order</button>
                </div>
            </div>
        </>
    )
}
export default Checkout