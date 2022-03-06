import React, { useState, useEffect } from "react";
import './index.scss';
import { TiTimes } from "react-icons/ti";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from '../../components/Background';
import ButnField from "../../components/Button";
import { updateCart, removeFromCart } from '../../redux/Action';
import Home from "../Home/Home";
import { useLocation, useNavigate } from "react-router-dom";
import Checkout from '../Checkout';
import Products from "../Products";
import products from '../../mock/product';
import IncDec from "../../components/IncDec";
import MobileCart from "../../components/CartTable/MobileCart";
import ScreenCart from '../../components/CartTable/ScreenCart';
import { useSelector, useDispatch } from "react-redux";
import { Splitscreen } from "@mui/icons-material";

const Cart = (props) => {
    const [width, setWidth] = useState(window.screen.width);

  useEffect(() => {

    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    }

  }, [window.screen.width])

  const updateDimensions = () => {
    setWidth(window.screen.width)
  };
    const navigate = useNavigate();
    const dispatch = useDispatch();

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

    const { cart: { totalPrice, products, quantity } } = useSelector(state => state);
    return (
        <>
            <Background title="Cart" />
            {width <= 499 ? <MobileCart /> : <ScreenCart />}
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
                                            <li> ${200.00}</li>
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
                                    <td className="card-checkout">${totalPrice + 200.00}</td>
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
