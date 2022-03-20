import React, { Component, useState } from "react";
import Background from '../../components/Background';
import Login from "../../components/RegistrationLogin/Login";
import Register from "../../components/RegistrationLogin/Register";
import { Route, Routes, Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const LoginForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [userId, setUserId] = useState({})

    return (
        <>
            <ToastContainer />
            <Background
                title={location.pathname === "/register" ? "Registeration" : "Login"}
            />
            <div className="Login-page">
                <div className="login-btn">
                    <button className="butn-field" onClick={() => navigate("/register")}>Register</button>
                    <button className="butn-field" onClick={() => navigate("/login")}>Login</button>
                </div>
                {location.pathname === "/register" ? <Register /> : <Login />}

            </div>

        </>
    )
}
export default LoginForm;



