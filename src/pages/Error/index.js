import React, { Component } from "react";
import './index.scss';
import Background from '../../components/Background';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TiArrowBack } from "react-icons/ti";
import Home from "../Home/Home";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <Background title="Error" />
            <div className="error-container">
            <div className="error">
                
                <img src={require("../../images/error.png")} />
            </div>
            <div className="error-body">
                <h1 style={{fontSize: '50px', fontWeight: '700'}}>
                There’s Nothing Here
                </h1>
                <p className="error-para">
                The page you are looking for may
                 have been renamed or does nost exist in this server you will be redirected to homepage shortly
                </p>
                <Link to="/">
                <Button id="button-addon2" className='checkout-butn'>
                    <TiArrowBack className="error-icon"/>
                        Back Home
                    </Button></Link>
                </div>
            </div>
           
        </>
    )
}
export default Error