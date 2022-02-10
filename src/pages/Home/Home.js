import React, { Component } from "react";
import './index.css'
import Icons from '../../icons';
import categories from "../../mock/categories";
import product from '../../mock/product';
import Product from "../../components/Product";
import services from "../../mock/services";
import Footer from '../../components/Footer';
import Services from "../../components/Services";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from '../Products';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
    const navigate = useNavigate();

    useSelector(state => console.log({state}))

    return (
        <>
            <div className="container-img">
                <div className="img">
                    <h1 className="shop">Bengal Vegetable Farm <br /> Organic 100%</h1>
                    <p className="p-img">Up to 50% off, Only This Week Don’t Miss !</p>
                    <Button id="button-addon2" className="shop-butn" onClick={() => navigate("/product")}>
                        Shop Now
                    </Button>

                </div>
            </div>
            <div className="search_product">
                <input type="text" placeholder="Search Your Products..." className="input-search" />
                <a href="" className="search">Search</a>
            </div>
            <h1 >
                What do you looking for ?
            </h1>
            <div className="body">
                <div className="container-category">
                    <div className="row-category">
                        {
                            categories.map(category => <div className="category">
                                {<div>
                                    {category.icon}
                                </div>}
                                <h5 className="category-title">{category.name}</h5>
                            </div>)
                        }
                    </div>
                </div>
            </div>
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
            <h1 >
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
                        <Button id="button-addon2" className="shop-butn2" onClick={() => navigate("/product")}>
                            Shop Now
                        </Button>
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
