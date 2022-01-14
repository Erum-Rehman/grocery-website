import React, { Component } from "react";
import './index.css'
import Nav from '../../components/Navbar/Nav';
import Icons from '../../icons';
import categories from "../../mock/categories";
import product from '../../mock/product';
import Product from "../../components/Product";
import services from "../../mock/services";
import Footer from '../../components/Footer';

const Home = () => {

    return (
        <>
            <div>
                <Nav />
            </div>

            <div className="container-img">
                <div className="img">
                    <h1 className="shop">Bengal Vegetable Farm <br /> Organic 100%</h1>
                    <p className="p-img">Up to 50% off, Only This Week Don’t Miss !</p>
                    <a  href="" className="shop-butn">Shop Now</a>

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
            <Product/>
           
             <div className="container-img">
                <div className="img-offer" >
                    <div className="overlay">
                    <h2 >Weekly Special Offers on Vegetable</h2>
                    <a  href="" className="shop-butn2">Shop Now</a>
                    </div>
                </div>
            </div> 
            
            <Product/>

         
            <div className="body">
                <div className="container-category">
                    <div className="row-category">
                        {
                            services.map(service => <div className="services">
                                {<div>
                                    {service.icon}
                                </div>}<br/>
                                <h5 className="services-title">{service.name}</h5>
                                <p style={{ color: 'grey', fontSize: '14px', fontWeight: '500' }}>{service.para}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Home;
