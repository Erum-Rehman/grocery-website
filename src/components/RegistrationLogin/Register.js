import React, { useState } from "react";
import './index.scss';
import Background from '../../components/Background';
// import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButnField from "../../components/Button";
import Login from "./Login";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, auth, db, ref, set } from "../../config/fire";
import * as Yup from 'yup';
import axios from 'axios';
import { Formik } from "formik";

const RegexExp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/)
const RegistrationSchema = Yup.object().shape({
    email: Yup.string()
        .email("invalid email address")
        .required("field req")
    ,
    password: Yup.string()
        .min(8, "less than limit")
        .max(20, "exeeds the limit")
        .matches(RegexExp, "wrong pattern")
        .oneOf([Yup.ref('confirmPassword'), null], 'Password do not match')
    ,
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password do not match')
})
const Registration = ({ registerUser }) => {
    const navigate = useNavigate();
    const [passwordType, setPasswordType] = useState("password");
    const [password, setPassword] = useState("");
    const [ConfrmpasswordType, setConfrmpasswordType] = useState("password");
    const [confirmPassword, setconfirmPassword] = useState("");
    const handleChange = (evnt) => {
        setPassword(evnt.target.value);
        setconfirmPassword(evnt.target.value)
    }
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    const toggleConfrmPassword = () => {
        if (ConfrmpasswordType === "password") {
            setConfrmpasswordType("text")
            return;
        }
        setConfrmpasswordType("password")
    }
    const handleRegistration = (data) => {
        const body = {
            email: data.email.toLowerCase(),
            password: data.password,
            name: data.name,
            confirmPassword: data.confirmPassword,
        }
        console.log({ body })

        // Register user
        createUserWithEmailAndPassword(auth, body.email, body.password)
            .then(res => {
                const uid = res.user.uid;
                const reference = ref(db, `/users/${uid}`);
                set(reference, data).then(user => {
                    console.log({ "done": user })
                    navigate('/login')
                })
            })
            .catch(err => console.log({ err }))
    }
    return (
        <Formik
            initialValues={{
                name: "",
                city: "",
                contact: "",
                address: "",
                country: "",
                password: "",
                email: "",
                confirmPassword: "",
            }}
            validationSchema={RegistrationSchema}
            onSubmit={values => handleRegistration(values)}
        >
            {({ values, errors, handleChange, handleSubmit, touched }) =>
                <>
                    <form className="login-container" onSubmit={handleSubmit}>
                        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Register Your account</h2>
                        <div className="contact-cell">
                            <label>User Name *</label><br />
                            <input
                                type="text" name="name"
                                placeholder="Your first name"
                                className="contact-field"
                                value={values.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="contact-cell">
                            <label>Email *</label><br />
                            <input
                                type="email" name="email"
                                placeholder="Enter your email"
                                className="contact-field"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        </div>
                        <div className="contact-cell">
                            <label>Contact *</label><br />
                            <input
                                type="Number" name="contact"
                                placeholder="XX-"
                                className="contact-field"
                                value={values.contact}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="contact-cell">
                            <label>Address *</label><br />
                            <input
                                type="text" name="address"
                                placeholder="enter your address"
                                className="contact-field"
                                value={values.address}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="contact-cell">
                            <label>City *</label><br />
                            <select className="contact-field"
                                name="city"
                                value={values.city}
                                onChange={handleChange}>
                                <option className="dropdown">Town/City </option>
                                <option value="Karachi" >Karachi </option>
                                <option value="Lahore">Lahore</option>
                                <option value="Islamabad">Islamabad</option>

                            </select>
                        </div>
                        <div className="contact-cell">
                            <label>Country *</label><br />
                            <select className="contact-field"
                                name="country"
                                value={values.country}
                                onChange={handleChange}>
                                <option value="Pakistan" className="dropdown">Country </option>
                                <option value="India" >Pakistan </option>
                                <option value="India" >India </option>
                                <option value="America">America</option>
                                <option value="London">London</option>
                            </select>
                        </div>
                        <div className="contact-cell">
                            <label>Password *</label><br />
                            <input
                                type={passwordType}
                                name="password"
                                placeholder="***********"
                                className="contact-field"
                                value={values.password}
                                onChange={handleChange}
                            />
                            <button type="button" className="password-login" onClick={togglePassword}>
                                {passwordType === "password" ? <FiEyeOff /> : <FiEye />}
                            </button>
                            {errors.password && touched.password ? <p>{errors.password}</p> : <></>}
                        </div>

                        <div className="contact-cell">
                            <label>Confirm Password *</label><br />
                            <input
                                type={ConfrmpasswordType}
                                name="confirmPassword"
                                placeholder="***********"
                                className="contact-field"
                                value={values.confirmPassword}
                                onChange={handleChange}
                            />
                             <button type="button" className="password-login" onClick={toggleConfrmPassword}>
                                {ConfrmpasswordType === "password" ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                        <div className="contact-cell">
                            <input type="checkbox" style={{ marginRight: '15px' }} />
                            <label style={{ color: "#505050", fontSize: '17px', fontWeight: '500' }}>
                                I agree to the Terms &amp; Policy</label>

                        </div>
                        <ButnField title="CREATE AN ACCOUNT" type="submit"/>
                    </form>
                </>
            }
        </Formik>
    )
}
export default Registration;