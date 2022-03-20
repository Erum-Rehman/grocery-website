import React, { Component } from "react";
import './index.scss';
import { TiTimes } from "react-icons/ti";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from '../../components/Background';
import ButnField from "../../components/Button";
import { updateCart, removeFromCart } from '../../redux/Action';
import { useLocation, useNavigate } from "react-router-dom";
import IncDec from "../../components/IncDec";
import { useSelector, useDispatch } from "react-redux";
import { Splitscreen } from "@mui/icons-material";

const MobileCart = (props) => {
    // const [items, setItems] = useState({
    //     name: "",
    //     discountPrice: "",
    //     totalPrice: "",
    //     oldPrice: "",
    //     image: "",
    // });

    // let name, value;
    // const getUserData = (e) => {
    //     name = e.target.name;
    //     value = e.target.value;
    //     setUser({ ...user, [name]: value })
    // }

    // const postData = async (event) => {
    //     event.preventDefault();

    //     const { name, email, message } = user;

    //     if (name && email && message) {
    //         const res = await fetch(
    //             "https://grocery-website-589ba-default-rtdb.firebaseio.com/Cart.json", {
    //             headers: {
    //                 "Content-type": "Application/json"
    //             },
    //             body: JSON.stringify({
    //                 name,
    //                 email,
    //                 message,
    //             })
    //         })
    //         if (res) {
    //             setUser({
    //                 name: "",
    //                 email: "",
    //                 message: "",
    //             })
    //             alert("message sent successfully")
    //         }
    //     }
    //     else{
    //         alert("Please fill all the fields")
    //     }
        
    // }
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
        <div style={{marginTop: '80px'}}></div>
            {
                products.map((item, index) => (
                    <div className="mobile-cart" key={item}>
                        <div className="cart-div">
                            <p className="div-title">Delete</p>
                            <div><TiTimes className="del-icon" onClick={() => removeItem(index)} /></div>
                        </div>
                        <div className="cart-div">
                            <p className="div-title">Image</p>
                            <div><img src={item.image} className="cart-image" /></div>
                        </div>
                        <div className="cart-div">
                            <p className="div-title">Product Name</p>
                            <div className="cart-name">{item.name}</div>
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