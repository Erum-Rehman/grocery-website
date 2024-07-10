import React, { Component } from "react";
import './index.scss'
import Icons from '../../icons';
import categories from "../../mock/categories";
import product from '../../mock/product';
import Product from "../../components/Product";
import services from "../../mock/services";
import Services from "../../components/Services";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from '../Products';
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Category from '../../components/Carousel';
import axios from 'axios';

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <div className="container-img">
                <div className="img">
                    <h1 className="shop">Bengal Vegetable Farm 
                    {/* {location.state.id} */}
                    <br /> Organic 100%</h1>
                    <p className="p-img">Up to 50% off, Only This Week Don’t Miss !</p>
                    <div className="btn-div">
                        <button id="button-addon2" className="shop-homebutn" onClick={() => navigate("/product")}>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="search_product">
                <input type="text" placeholder="Search Your Products..." className="input-search" />
                <a href="" className="search">Search</a>
            </div>
            <h1 >
                What do you looking for ?
            </h1>
            <Category/>
            <div className="body">
                <div className="row-offer">
                    <div className="offer-card">
                        <img src={require("../../images/offer-banner1.jpg")} alt="" className="offer-img" />
                    </div>
                    <div className="offer-card">
                        <img src={require("../../images/offer-banner-2.jpg")} alt="" className="offer-img" />
                    </div>
                    <div className="offer-card">
                        <img src={require("../../images/offer-banner3.jpg")} alt="" className="offer-img" />
                    </div>

                </div>
            </div>
            <h1 className="seller-head">
                Best Seller Grocery
            </h1>
            <p className="para">We Provide best Quality & fresh Grocery Iterm.</p>
            <div className="body">
                <div className="product-container">
                    <Product />
                </div>
            </div>


            <div className="container-img">
                <div className="img-offer" >
                    <div className="overlay">
                        <h2 >Weekly Special Offers on Vegetable</h2>
                        <button id="button-addon2" className="shop-butn2" onClick={() => navigate("/product")}>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="body">
                <div className="product-container">
                    <Product />
                </div>
            </div>
            <Services />
        </>
    )
}
export default Home;
