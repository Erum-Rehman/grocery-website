import React, { useState } from "react";
import './index.scss';
import Background from '../../components/Background';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButnField from "../../components/Button";
import Login from "./Login";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { toast } from "react-toastify";

const Registration = ({registerUser}) => {
    const [userRegister, setUserRegister] = useState({
        name: "",
        // lastName: "",
        password: "",
        email: "",
        confirmPassword: "",
    });

    let name, value;
    const getUserRegister = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserRegister({ ...userRegister, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const { name, password, email, confirmPassword } = userRegister;

        if(!name || !password || !email || !confirmPassword){
            return toast.error("please fill required fields")
        }
        if(password.length < 6){
            return toast.error("Password must be of 6 or more characters!")
        }
        const data = {
            name, password, email, confirmPassword
        }
        registerUser(data)
        console.log(`register fields ${JSON.stringify(data)}`)
    }
    return (
        <>
            <form className="login-container" onSubmit={handleSubmit}>
                <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Register Your account</h2>
                <div className="contact-cell">
                    <label>First Name *</label><br />
                    <input
                        type="text" name="name"
                        placeholder="Your first name"
                        className="contact-field"
                        value={userRegister.name}
                        onChange={getUserRegister}
                    />
                </div>
                {/* <div className="contact-cell">
                    <label>Last Name *</label><br />
                    <input
                        type="text" name="lastName"
                        placeholder="Your last name"
                        className="contact-field"
                        value={userRegister.lastName}
                        onChange={getUserRegister}
                    />
                </div> */}
                <div className="contact-cell">
                    <label>Email *</label><br />
                    <input
                        type="email" name="email"
                        placeholder="Enter your email"
                        className="contact-field"
                        value={userRegister.email}
                        onChange={getUserRegister}
                    />
                </div>
                <div className="contact-cell">
                    <label>Password *</label><br />
                    <input
                        type="password" name="password"
                        placeholder="***********"
                        className="contact-field"
                        value={userRegister.password}
                        onChange={getUserRegister}
                    />
                    <label className="password-login"><FiEye /></label>
                </div>

                <div className="contact-cell">
                    <label>Confirm Password *</label><br />
                    <input
                        type="password" name="confirmPassword"
                        placeholder="***********"
                        className="contact-field"
                        value={userRegister.confirmPassword}
                        onChange={getUserRegister}
                    />
                    <label className="password-login"><FiEye /></label>
                </div>
                <div className="contact-cell">
                    <input type="checkbox" style={{ marginRight: '15px' }} />
                    <label style={{ color: "#505050", fontSize: '17px', fontWeight: '500' }}>
                        I agree to the Terms &amp; Policy</label>

                </div>
                <ButnField title="CREATE AN ACCOUNT" type="submit"/>
            </form>
        </>
    )
}
export default Registration;