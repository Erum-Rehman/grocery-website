import React, { Component } from "react";
import './index.scss'
import Product from "../../components/Product";
import Home from "../Home/Home";
import Services from "../../components/Services";
import Background from '../../components/Background';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton, SplitButton, ButtonGroup } from "react-bootstrap";
import { Button } from "bootstrap";
import Rating from "../../components/Rating";
import BasicPagination from "../../components/BasicPagination";

const ProductSidebar = () => {
    return (
        <>
            <Background title="Product Sidebar" />
            <div className="dropdown-container">
                <div className="p-left">
                    <p style={{ fontWeight: '500' }}>Showing 1-12 item</p>
                </div>
                <div className="drop-right">
                    <DropdownButton
                        as={ButtonGroup}
                        key="down"
                        id={`dropdown-button-drop-down`}
                        drop="down"
                        variant="secondary"
                        title={` Filter `}
                    >
                        <Dropdown.Item eventKey="1">Filter</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Filter</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Filter</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton
                        as={ButtonGroup}
                        key="down"
                        id={`dropdown-button-drop-down`}
                        drop="down"
                        variant="Light"
                        title={` Popularity `}
                        className="dropdown-popularity"
                    >
                        <Dropdown.Item eventKey="1">Popularity</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Popularity</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Popularity</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            <div className="product-sidebar">
                <div className="sidebar-container">
                    <Product />
                    <div className="pagination-body">
                        <BasicPagination />
                    </div>
                </div>
                <div className="sidebar-options">
                    <h4 style={{ textAlign: 'left' }}>EXPLORE</h4>

                    <div className="explore">
                        <div className="explore-container">
                            <h6>Allium</h6>
                            <span>+</span>
                        </div>
                        <div className="explore-container">
                            <h6>Beverage</h6>
                            <span>+</span>
                        </div>
                        <div className="explore-container">
                            <h6>
                                Dairy bread &amp; Eggs
                            </h6>
                            <span>+</span>
                        </div>
                        <div className="explore-container">
                            <h6>Fruits &amp; Vegetables</h6>
                            <span>+</span>
                        </div>
                        <div className="explore-container">
                            <h6>Grocery &amp; Staples</h6>
                            <span>+</span>
                        </div>
                    </div>
                    <div className="price-container">
                        <h4 >PRICE</h4>
                        <div className="filter-container">
                            <a href="" className="filter-butn">Filter</a>
                            <div className="filter-price">
                                <span>Price: </span>
                                <input type='text' />
                            </div>
                        </div>
                    </div>
                    <div className="top-sale">
                        <h4 >TOP SALE</h4>
                    </div>
                    <div className="product-side">
                        <div className="sale-container">
                            <img src={require("../../images/strawbrry.png")} />
                        </div>
                        <div className="sale-content">
                            <p className="sale-title">Organic Fruit Fresh Strawnerry</p>
                            <Rating />
                            <div>
                                <span className="old-price">$45.36</span>
                                <span className="new-price">$35.36</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-side">
                        <div className="sale-container">
                            <img src={require("../../images/strawbrry.png")} />
                        </div>
                        <div className="sale-content">
                            <p className="sale-title">Organic Fruit Fresh Strawnerry</p>
                            <Rating />
                            <div>
                                <span className="old-price">$45.36</span>
                                <span className="new-price">$35.36</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-side">
                        <div className="sale-container">
                            <img src={require("../../images/strawbrry.png")} />
                        </div>
                        <div className="sale-content">
                            <p className="sale-title">Organic Fruit Fresh Strawnerry</p>
                            <Rating />
                            <div>
                                <span className="old-price">$45.36</span>
                                <span className="new-price">$35.36</span>
                            </div>
                        </div>
                    </div>

                    <div className="top-sale">
                        <h4 >PRODUCT TAG</h4>
                    </div>

                    <ul className="category-btn">
                        <li><a className='butn-field2'> Food </a> </li>
                        <li><a className='butn-field2'> Organic </a> </li>
                        <li><a className='butn-field2'> Coffee </a> </li>
                        <li><a className='butn-field2'> 100% Dry </a> </li>
                        <li><a className='butn-field2'> Fresh </a> </li>
                        <li><a className='butn-field2'> Bag </a> </li>
                        <li><a className='butn-field2'> Vegetable </a> </li>
                        <li><a className='butn-field2'> Green </a> </li>
                    </ul>
                </div>
            </div>

            <Services />
        </>
    )
}
export default ProductSidebar;