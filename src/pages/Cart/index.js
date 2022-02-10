import React, { Component } from "react";
import './index.css';
import { TiTimes } from "react-icons/ti";
import Footer from '../../components/Footer';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from '../../components/Background';
import ButnField from "../../components/Button";
import Home from "../Home/Home";
import { useLocation, useNavigate } from "react-router-dom";
import Checkout from '../Checkout';
import Products from "../Products";
import products from '../../mock/product';
import IncDec from "../../components/IncDec";
import { IoIosAdd, IoIosRemove } from 'react-icons/io';
import { useSelector } from "react-redux";

const Cart = (props) => {
    const navigate = useNavigate();
    const { cart: { totalPrice, products, quantity } } = useSelector(state => state);
    console.log({ totalPrice, products, quantity })

    return (
        <>
            <Background title="Cart" />
            <div className="about-container" >
                <table className="cart-table">
                    <thead className="table-head">
                        <tr>
                            <td>Delete</td>
                            <td>Image</td>
                            <td>Product Name</td>
                            <td>Unite Price</td>
                            <td>Discount Price</td>
                            <td>Quantity</td>
                            <td>Subtotal</td>
                        </tr>
                    </thead>

                    <tbody className="table-body">
                        {
                            products.map((item, index) => (
                                <tr key={item}>
                                    <td><TiTimes className="del-icon" /></td>
                                    <td className="cart-image" ><img src={item.image} className="cart-image" /></td>
                                    <td className="prdt-name">{item.name}</td>
                                    <td className="price">${item.oldPrice}/kg</td>
                                    <td className="dc-price">${item.discountPrice}/kg</td>
                                    <td className="add-del"><IncDec /></td>
                                    <td className="subtotal">{item.totalPrice}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>


            </div>
            <div className="cart-container" >
                <h4> Coupon Code</h4>
                <div className="checkout">
                    <InputGroup className="mb-3 coupon-input">
                        <FormControl
                            placeholder="Coupon Code"
                            aria-label="Coupon Code"
                            aria-describedby="basic-addon2"
                        />
                        <Button id="button-addon2" className='coupon-butn'>
                            Apply Code
                        </Button>
                    </InputGroup>
                    <div className="checkout-table">
                        <table >

                            <tbody className="table-body">
                                <tr>
                                    <td className="card-checkout">Cart Totals</td>
                                    <td></td>
                                    <td className="card-checkout">${totalPrice}</td>

                                </tr>
                                <tr>
                                    <td className="card-checkout">Shipping</td>
                                    <td className="card-shipping">
                                        <ul>
                                            <li>Shipping Fee</li>
                                            <li>Total ( tax excl.)</li>
                                            <li>Total ( tax inc.)</li>
                                            <li>Taxes</li>
                                            <li>Shipping Enter your address to view shipping options.</li>
                                            <li className="cart-calculate">Calculate Shopping</li>
                                        </ul>
                                    </td>
                                   
                                        <td className="card-checkout">
                                            <ul>
                                                <li> $Fee</li>
                                                <li> $15</li>
                                                <li> $15</li>
                                                <li> $15</li>
                                                <li>$5</li>
                                            </ul>
                                        </td>
                                </tr>
                                <tr>
                                    <td className="card-checkout">Subtotal</td>
                                    <td></td>
                                    <td className="card-checkout">$162.70</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="buttons">
                            <ButnField title="Proceed to Checkout" onClick={() => navigate("/checkout")} />
                            <Button className="cont-shopping" onClick={() => navigate("/product")}>
                                Continue to Shopping</Button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Cart;
