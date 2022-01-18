import React, { Component } from "react";
import './index.css';
import Nav from '../../components/Navbar/Nav'
import { TiTimes } from "react-icons/ti";
import Footer from '../../components/Footer';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from '../../components/Background';

const Cart = () => {
    return (
        <>
            <Nav />
           <Background title="Cart"/>
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
                        <tr>
                            <td><TiTimes className="del-icon" /></td>
                            <td><img src={require("../../images/egg.png")} alt="" className="cart-image" /></td>
                            <td className="prdt-name">Eggs</td>
                            <td className="price">$10.00</td>
                            <td className="dc-price">$9.12</td>
                            <td>Quantity</td>
                            <td className="subtotal">$18.24</td>
                        </tr>
                        <tr>
                            <td><TiTimes className="del-icon" /></td>
                            <td><img src={require("../../images/egg.png")} alt="" className="cart-image" /></td>
                            <td className="prdt-name">Eggs</td>
                            <td className="price">$10.00</td>
                            <td className="dc-price">$9.12</td>
                            <td>Quantity</td>
                            <td className="subtotal">$18.24</td>
                        </tr>
                        <tr>
                            <td><TiTimes className="del-icon" /></td>
                            <td><img src={require("../../images/egg.png")} alt="" className="cart-image" /></td>
                            <td className="prdt-name">Eggs</td>
                            <td className="price">$10.00</td>
                            <td className="dc-price">$9.12</td>
                            <td>Quantity</td>
                            <td className="subtotal">$18.24</td>
                        </tr>
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
                            <td className="card-checkout">$128.70</td>

                        </tr>
                        <tr>
                            <td className="card-checkout">Shipping</td>
                            <td className="card-shipping">Shipping Fee<br />
                                Total ( tax excl.)<br />
                                Total ( tax incl.)<br />
                                Taxes<br />
                                Shipping Enter your address to view shipping options.<br/>
                                <a className="cart-calculate">Calculate Shopping</a></td>
                            <td className="card-checkout">Fee<br />
                                $15<br />
                                $15<br />
                                $15<br />
                                $5</td>

                        </tr>
                        <tr>
                            <td className="card-checkout">Subtotal</td>
                            <td></td>
                            <td className="card-checkout">$162.70</td>
                        </tr>
                    </tbody>
                </table>
                <div className="buttons">
                <Button id="button-addon2" className='checkout-butn'>
                        Proceed to Checkout
                    </Button>
                    <Button className="continue">
                    <a >Continue to Shopping</a></Button>
                    </div>
                </div>
                </div>
               
            </div>
            <Footer/>
        </>
    )
}
export default Cart;
