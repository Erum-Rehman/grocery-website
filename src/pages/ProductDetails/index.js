import React, { useState, useLayoutEffect } from "react";
import './index.scss';
import Background from '../../components/Background';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from "../../children/Description";
import Review from "../../children/Review";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Rating from "../../components/Rating";
import Cart from "../Cart";
import IncDec from "../../components/IncDec";
import { useSelector, useDispatch } from "react-redux";
import allProducts from "../../mock/product";
import { updateCart } from '../../redux/Action';

const ProductDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [productData, setProductData] = useState({})
    const { id } = useParams();
    const increment = (item) => {
        item.count = item.count ? item.count + 1 : 1;
        dispatch(updateCart(item));
    }

    const decrement = (item) => {
        item.count = item.count > 1 ? item.count - 1 : 1;
        dispatch(updateCart(item));
    }

    useLayoutEffect(() => {
        console.log({ id }, allProducts)
        const data = allProducts.find((item) => item.id === id);
        const productCount = products.find((item) => item.id === id) ? count : '0';
        data.count = count ? count : data.count
        setProductData(data)
    }, []);

    console.log({ productData })

    const { cart: { totalPrice, products, quantity } } = useSelector(state => state);
    const { id: productId, image, image2, image3, image4, name, discountedPrice, description, button, count } = productData;
    // const { count } = products;

    return (
        <>
            <Background title="Product Details" />
            <div className="imgs-detail">
                <div className="product-bar">
                    <div className="side-imgs">
                        <button >
                            <img src={image} />
                        </button>
                        <button>
                            <img src={image} />
                        </button>
                        <button>
                            <img src={image} />
                        </button>
                    </div>
                    <div className="product-imgs">
                        <img src={image} />
                    </div>
                </div>

                <div className="product-description">
                    <div className="review-rating">
                        <Rating />
                        <span className="review">(32 Review)</span>
                    </div>
                    <h3> {name}</h3>
                    <h4>{discountedPrice}</h4>
                    <p>{description}</p>
                    <div className="details-btn">
                        <div className="product-inc">
                            <IncDec
                                onClickAdd={() => increment(count + 1)}
                                onClickRemove={() => decrement()}
                                count={count}
                            />
                        </div>
                        <Button id="button-addon2" className='msg-btn' onClick={() => navigate("/cart")}>
                            {button}
                        </Button>
                    </div>

                    <ul className="product-info">
                        <li>
                            <span>Product Type: </span>Organic
                        </li>
                        <li>
                            <span>MFG: </span>July 4.2021
                        </li>
                        <li>
                            <span>Life: </span>05 Days
                        </li>
                        <li>
                            <span>Category: </span>Grocery &amp; Staples
                        </li>
                    </ul>
                </div>
            </div>

            <h1 className="product-heading">Product Details</h1>
            <div className="details-container">
                <div className="product-detail">
                    <div className="product-detail-btn">
                        <Button id="button-addon2" className='detail-butn2' onClick={() => navigate("/description")}>
                            Description
                        </Button>
                        <Button id="button-addon2" className='detail-butn2' onClick={() => navigate("/review")}>
                            Our Review (2)
                        </Button>
                    </div>
                    {location.pathname === "/description" ? <Description />
                        : <Review />}
                </div>
            </div>
        </>
    )
}
export default ProductDetails