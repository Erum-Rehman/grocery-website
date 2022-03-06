import React, { Component } from "react";
import './index.scss';
import { TiTimes } from "react-icons/ti";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from '../../components/Background';
import ButnField from "../../components/Button";
import { updateCart, removeFromCart } from '../../redux/Action';
import { useLocation, useNavigate } from "react-router-dom";
import products from '../../mock/product';
import IncDec from "../../components/IncDec";
import { useSelector, useDispatch } from "react-redux";
import { Splitscreen } from "@mui/icons-material";

const ScreenCart = (props) => {
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
            <div className="cart-container1" >
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
                                    <td><TiTimes className="del-icon" onClick={() => removeItem(index)} /></td>
                                    <td className="cart-image" ><img src={item.image} className="cart-image" /></td>
                                    <td className="prdt-name">{item.name}</td>
                                    <td className="price">${item.oldPrice}/kg</td>
                                    <td className="dc-price">${item.discountPrice}/kg</td>
                                    <td className="add-del">
                                        <IncDec onClickAdd={() => increment(item)}
                                            onClickRemove={() => decrement(item)}
                                            count={item.count} />
                                    </td>
                                    <td className="subtotal">{item.totalPrice}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ScreenCart;