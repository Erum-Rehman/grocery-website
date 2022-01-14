import React, { Component } from "react";
import Nav from '../../components/Navbar/Nav'
import './index.css'
import product from '../../mock/product';
import Product from "../../components/Product/index";
import Home from "../Home/Home";
import Footer from '../../components/Footer';
import services from "../../mock/services";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton, SplitButton, ButtonGroup } from "react-bootstrap";

const Products = () => {
    return (
        <>
            <div>
                <Nav />
            </div>
            <div className="product-banner">
                <div className="overlay-1">
                    <h2 className="title">Product</h2>
                    <ol className="list">
                        <li>Home</li>
                        {/* <a  href="Home.js">Home</a> */}

                        <li> Product</li>
                    </ol>

                </div>
            </div>
            <div className="dropdown-container">
                <div className="p-left">
                    <p>Showing 1-12 item</p>
                </div>
                <div>

                    <div className="drop-right">
                        <div className="mb-2">

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
                                {/* <Dropdown.Divider /> */}
                            </DropdownButton>
                            <DropdownButton
                                as={ButtonGroup}
                                key="down"
                                id={`dropdown-button-drop-down`}
                                drop="down"
                                variant="Light"
                                title={` Popularity `}
                            >
                                <Dropdown.Item eventKey="1">Popularity</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Popularity</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Popularity</Dropdown.Item>
                                {/* <Dropdown.Divider /> */}
                            </DropdownButton>
                        </div>

                    </div>
                </div>
            </div>

            <Product />
            <div className="body">
                <div className="container-category">
                    <div className="row-category">
                        {
                            services.map(service => <div className="services">
                                {<div>
                                    {service.icon}
                                </div>}<br />
                                <h5 className="services-title">{service.name}</h5>
                                <p style={{ color: 'grey', fontSize: '14px', fontWeight: '500' }}>{service.para}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Products;