import React, { Component, useState } from "react";
import Background from '../../components/Background';
import Login from "../../components/RegistrationLogin/Login";
import Register from "../../components/RegistrationLogin/Register";
import { Route, Routes, Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import fire from '../../config/fire';
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { Password } from "@mui/icons-material";

const LoginForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log({ location })
    console.log(fire)
    const [user, setUser] = useState({})

    // Register user
    const registerUser = ({ email, password }) => {
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((data) => data.JSON())
            .then((res) => {
                console.log(res)
            })
            .catch(err => console.log('err', err))
    };

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
                {location.pathname === "/register" ? <Register registerUser={registerUser} /> : <Login />}

            </div>

        </>
    )
}
export default LoginForm;



