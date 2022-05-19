import React, { useState, useEffect } from "react";
import './index.scss';
import Background from '../../components/Background';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TiTimes } from "react-icons/ti";
import IncDec from "../../components/IncDec";
import { useSelector, useDispatch } from "react-redux";
import { updateCartItem, removeCartItem, deleteCartItems } from "../../redux/Thunk/cart";
import * as Yup from 'yup';
import axios from 'axios';
import { Formik } from "formik";
import { auth, db, ref, set } from "../../config/fire";
import { v4 as uuidv4 } from 'uuid';
import { addOrder, deleteCart } from "../../redux/Action";
import { addShippingOrder } from "../../redux/Thunk/order";

const Checkout = () => {

    const [checked, setChecked] = useState(false)
    const dispatch = useDispatch();

    const { cart: { totalPrice, products, quantity }, userReducer: { user: { uid, name, city, password, email, country, contact, address } } } = useSelector(state => state);

    const increment = (item) => {
        item.count = item.count ? item.count + 1 : 1;
        dispatch(updateCartItem(item));
    }

    const decrement = (item) => {
        item.count = item.count > 1 ? item.count - 1 : 1;
        dispatch(updateCartItem(item));
    }
    const removeItem = (id) => {
        dispatch(removeCartItem(id));
    }
    const handleCheck = () => {
        setChecked(!checked)
    }
    const handleCheckout = (data) => {
        const orderId = uuidv4();
        data.products = products;
        data.totalPrice = totalPrice;
        data.quantity = quantity;
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        data.date = date;
        data.orderId = orderId;
        const reference = ref(db, `/shippingData/${uid}/${orderId}`);
        set(reference, data).then(user => {
        dispatch(addOrder(data))
        dispatch(deleteCart())
            console.log({data})
        })
            .catch(err => console.log({ err }))
    }

    const onChecked = (setFieldValue) => {
        if(!checked) {
            setFieldValue('name', name)
            setFieldValue('city', city)
            setFieldValue('country', country)
            setFieldValue('password', password)
            setFieldValue('contact', contact)
            setFieldValue('email', email)
            setFieldValue('address', address);
        }
        setChecked(!checked)
    }

    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    city: "",
                    street: "",
                    contact: "",
                    code: "",
                    address: "",
                    country: "",
                    email: "",
                    msg: "",
                }}
                // validationSchema={ProfileSchema}
                onSubmit={values => handleCheckout(values)}
            >
                {({ values, errors, handleChange, handleSubmit, setFieldValue, touched }) =>
                    <>
                        <Background title="Checkout" />
                        <form className="checkout-container" onSubmit={handleSubmit}>
                            <div className="checkout-left">
                                <div className="billing-details">
                                    <div className="profile-checkout">
                                        <input type="checkbox" style={{ marginRight: '15px' }}
                                            checked={checked}
                                            onChange={() => onChecked(setFieldValue)} />
                                        <label style={{ color: "#505050", fontSize: '17px', fontWeight: '600' }}>
                                            Continue with the Profile Data</label>
                                    </div>
                                    <h5 className="profile" style={{ marginBotton: '5px' }}>Billing Details</h5>
                                    <div className="contact-cell">
                                        <label>Full Name </label><br />
                                        <input type="text"
                                            disabled
                                            name="name" 
                                            placeholder="Your Full name"
                                            value={values.name}
                                            className="contact-field"
                                            onChange={handleChange} />
                                    </div>
                                    <div className="contact-cell">
                                        <label>Country / Region</label><br />
                                        <select className="contact-field"
                                            name="country"
                                            disabled
                                            value={values.country}
                                            onChange={handleChange}>
                                            <option value="Pakistan" className="dropdown">Country </option>
                                            <option value="India" >Pakistan </option>
                                            <option value="India" >India </option>
                                            <option value="America">America</option>
                                            <option value="London">London</option>
                                        </select>
                                    </div>
                                    <div className="contact-cell">
                                        <label>Street Address</label><br />
                                        <input type="text"
                                            name="street"
                                            placeholder="House and street name"
                                            value={values.street}
                                            className="contact-field"
                                            onChange={handleChange} />
                                    </div>
                                    <div className="contact-cell">
                                        <label>Address </label><br />
                                        <input
                                            type="text" name="address"
                                            disabled
                                            placeholder="enter your address"
                                            value={values.address}
                                            className="contact-field"
                                            onChange={handleChange} />
                                    </div>
                                    <div className="contact-cell">
                                        <select className="contact-field"
                                            value={values.city}
                                            disabled
                                            name="city"
                                            onChange={handleChange}
                                        >
                                            <option className="dropdown">Town/City </option>
                                            <option value="Karachi" >Karachi </option>
                                            <option value="Lahore">Lahore</option>
                                            <option value="Islamabad">Islamabad</option>

                                        </select>
                                    </div>
                                    <div className="contact-cell">
                                        <input type="Number" name="code"
                                            placeholder="Post Code"
                                            value={values.code}
                                            className="contact-field"
                                            onChange={handleChange} />
                                    </div>
                                    <div className="contact-cell">
                                        <label>Additional Information </label><br />
                                        <input type="number" name="contact"
                                            disabled
                                            placeholder="Your Phone Number"
                                            value={values.contact}
                                            className="contact-field"
                                            onChange={handleChange} />
                                    </div>
                                    <div className="contact-cell">
                                        <input type="email" name="email"
                                            disabled
                                            placeholder="Your Email Address"
                                            className="contact-field"
                                            value={values.email}
                                            onChange={handleChange} />
                                    </div>
                                    <div className="contact-cell">
                                        <textarea
                                            className="contact-msg"
                                            rows="6"
                                            value={values.msg}
                                            onChange={handleChange}
                                            name="msg"
                                            placeholder="Order Notes (optional)"></textarea>
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
                                                    <TiTimes className="cancel" />
                                                    <span className="new-price">${item.discountPrice}/kg</span>
                                                </div>

                                            </div>
                                            <TiTimes className="del-order" onClick={() => removeItem(item.id)} />
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
                                <button className="order-btn" type="submit">Place Order</button>
                            </div>
                        </form>
                    </>
                }
            </Formik>
        </>
    )
}
export default Checkout