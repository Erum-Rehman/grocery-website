import React, { Component } from "react";
import './index.css';
import Background from '../../components/Background';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from "../../children/Description";
import Review from "../../children/Review";
import { useLocation, useNavigate } from "react-router-dom";
import Rating from "../../components/Rating";
import Cart from "../Cart";
import IncDec from "../../components/IncDec";

const ProductDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <Background title="Product Details" />
            <div className="imgs-detail">
                <div className="side-imgs">
                    <button >
                        <img src={require("../../images/big-apple.jpg")} />
                    </button>
                    <button>
                        <img src={require("../../images/big-apple.jpg")} />
                    </button>
                    <button>
                        <img src={require("../../images/big-apple.jpg")} />
                    </button>
                </div>
                <div className="product-imgs">
                    <img src={require("../../images/big-apple.jpg")} />
                </div>
                <div className="product-description">
                    <div className="review-rating"> 
                        <Rating />
                        <span className="review">(32 Review)</span>
                    </div>
                    <h3> Fresh Organic Vegetable Fruit</h3>
                    <h4>$41.36</h4>
                    <p>
                        RIBCAGE STR ANK RAINBOW - B lue High-rise straight-leg jeans <br /> Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="details-btn">
                        <div className="product-inc"><IncDec/></div>
                        <Button id="button-addon2" className='msg-btn' onClick={() => navigate("/cart")}>
                            Add to Cart
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
            <div className="about-container">
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