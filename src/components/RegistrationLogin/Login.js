import React, { useState } from "react";
import './index.scss';
import Background from '../../components/Background';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButnField from "../../components/Button";
import { FiEye } from "react-icons/fi";
import { toast } from "react-toastify";

const Login = () => {
    const [userLogin, setUserLogin] = useState({
        name: "",
        password: "",
    });

    let name, value;
    const getUserLogin = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserLogin({ ...userLogin, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const { name, password } = userLogin;

        if (!name || !password) {
            return toast.error("please fill required fields")
        }
        const data = {
            name, password,
        }
        console.log(`login fields ${JSON.stringify(data)}`)
    }

    return (
        <>
            <form className="login-container" onSubmit={handleSubmit}>
                <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Login Your Account</h2>
                <div className="contact-cell">
                    <label>User Name *</label><br />
                    <input
                        type="text" name="name"
                        placeholder="Your first name"
                        className="contact-field"
                        value={userLogin.name}
                        onChange={getUserLogin}
                    />
                </div>
                <div className="contact-login">
                    <label>Password *</label><br />
                    <input
                        type="password"
                        placeholder="***********"
                        name="password"
                        className="contact-field"
                        value={userLogin.password}
                        onChange={getUserLogin}
                    />
                    <label className="password-login"><FiEye /></label>
                </div>
                <span style={{ textAlign: 'end' }}>Forgotten Password?</span>

                    <div className="checkbox-div">
                        <input type="checkbox" style={{ marginRight: '15px' }} />
                        <label style={{ color: "#505050", fontSize: '17px', fontWeight: '500' }}>
                            Remember Me</label>
                    </div>
                <ButnField title="LOGIN ACCOUNT" type="submit" />
            </form>
        </>
    )
}
export default Login;
