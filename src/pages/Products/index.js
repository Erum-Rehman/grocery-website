import React, { Component } from "react";
import './index.scss'
import Product from "../../components/Product";
import Home from "../Home/Home";
import Services from "../../components/Services";
import Background from '../../components/Background';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton, SplitButton, ButtonGroup } from "react-bootstrap";
import BasicPagination from "../../components/BasicPagination";

const Products = () => {
    return (
        <>
            <Background title="Products" />
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
            <div className="body">
                <div className="product-container">
                    <Product />
                </div>
            </div>
            <div className="pagination-body">
                <BasicPagination />
            </div>
            <Services />
        </>
    )
}
export default Products;