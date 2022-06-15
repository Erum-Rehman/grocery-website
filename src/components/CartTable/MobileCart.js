import React, { Component } from "react";
import './index.scss';
import { TiTimes } from "react-icons/ti";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from '../../components/Background';
import ButnField from "../../components/Button";
import { updateCartItem, removeCartItem } from "../../redux/Thunk/cart";
import { useLocation, useNavigate } from "react-router-dom";
import IncDec from "../../components/IncDec";
import { useSelector, useDispatch } from "react-redux";
import { Splitscreen } from "@mui/icons-material";

const MobileCart = (props) => {
    const dispatch = useDispatch();
    const { cart: { totalPrice, products, products: cartProducts, quantity } } = useSelector(state => state);

    const increment = (item) => {
        item.count = item.count ? item.count + 1 : 1;
        dispatch(updateCartItem(item, cartProducts));
    }

    const decrement = (item) => {
        item.count = item.count > 1 ? item.count - 1 : 1;
        dispatch(updateCartItem(item, cartProducts));
    }
    const removeItem = (id) => {
        dispatch(removeCartItem(id));
    }


    return (
        <>
        <div style={{marginTop: '80px'}}></div>
            {
                products.map((item, index) => (
                    <div className="mobile-cart" key={item}>
                        <div className="cart-div">
                            <p className="div-title">Delete</p>
                            <div><TiTimes className="del-icon" onClick={() => removeItem(item.id)} /></div>
                        </div>
                        <div className="cart-div">
                            <p className="div-title">Image</p>
                            <div><img src={`${window.location.origin}/${item.image}`} className="cart-image" /></div>
                        </div>
                        <div className="cart-div">
                            <p className="div-title">Product Name</p>
                            <div className="cart-name">{item.p_name}</div>
                        </div>
                        <div className="cart-div">
                            <p className="div-title">Unite Price</p>
                            <div className="cart-name">${item.oldPrice}/kg</div>
                        </div>
                        <div className="cart-div">
                            <p className="div-title">Discount Price</p>
                            <div className="dp">${item.discountPrice}/kg</div>
                        </div>
                        <div className="cart-div">
                            <p className="div-title">Quantity</p>
                            <div className="mobile-qty"> <IncDec onClickAdd={() => increment(item)}
                                onClickRemove={() => decrement(item)}
                                count={item.count} /></div>
                        </div>
                        <div className="cart-div">
                            <p className="div-title">Subtotal</p>
                            <div className="cart-name">${item.totalPrice}</div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
export default MobileCart;