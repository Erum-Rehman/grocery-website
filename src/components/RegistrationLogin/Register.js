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
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState(0);
    const [name, setName] = useState("");

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
    // const handleRegistration = (data) => {
    //     const body = {
    //         email: data.email.toLowerCase(),
    //         password: data.password,
    //         name: data.name,
    //         confirmPassword: data.confirmPassword,
    //     }
    //     console.log({ body })

    //     // Register user
    //     createUserWithEmailAndPassword(auth, body.email, body.password)
    //         .then(res => {
    //             const uid = res.user.uid;
    //             const reference = ref(db, `/users/${uid}`);
    //             set(reference, data).then(user => {
    //                 console.log({ "done": user })
    //                 navigate('/login')
    //             })
    //         })
    //         .catch(err => console.log({ err }))
    // }

    const handleRegistration = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:8000/api/v1/register",
                { email, name, password, city, country, contact, address, confirmPassword },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
            console.log(data.message, 'data');
            setName("");
            setEmail("");
            setPassword("");
            setAddress("");
            setContact("");
            setCity("");
            setCountry("");
            setconfirmPassword("");
        }
        catch (err) {
            toast.err(err.response.data.message, 'err')
        }
    }
    return (
        <Formik
            // initialValues={{
            //     name: "",
            //     city: "",
            //     contact: "",
            //     address: "",
            //     country: "",
            //     password: "",
            //     email: "",
            //     confirmPassword: "",
            // }}
            validationSchema={RegistrationSchema}
        // onSubmit={values => handleRegistration(values)}
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
                                value={name}
                                // Header={Header}
                                // onChange={handleChange}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="contact-cell">
                            <label>Email *</label><br />
                            <input
                                type="email" name="email"
                                placeholder="Enter your email"
                                className="contact-field"
                                value={email}
                                // Header={Header}
                                // onChange={handleChange}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        </div>
                        <div className="contact-cell">
                            <label>Contact *</label><br />
                            <input
                                type="Number" name="contact"
                                placeholder="XX-"
                                className="contact-field"
                                value={contact}
                                // Header={Header}
                                // onChange={handleChange}
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </div>
                        <div className="contact-cell">
                            <label>Address *</label><br />
                            <input
                                type="text" name="address"
                                placeholder="enter your address"
                                className="contact-field"
                                value={address}
                                // Header={Header}
                                // onChange={handleChange}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className="contact-cell">
                            <label>City *</label><br />
                            <select className="contact-field"
                                name="city"
                                value={city}
                                // Header={Header}
                                // onChange={handleChange}>
                                onChange={(e) => setCity(e.target.value)} required>
                                <option value="" className="dropdown">Town/City </option>
                                <option value="Karachi" >Karachi </option>
                                <option value="Lahore">Lahore</option>
                                <option value="Islamabad">Islamabad</option>

                            </select>
                        </div>
                        <div className="contact-cell">
                            <label>Country *</label><br />
                            <select className="contact-field"
                                name="country"
                                value={country}
                                // Header={Header}
                                // onChange={handleChange}>
                                onChange={(e) => setCountry(e.target.value)}
                                required>
                                <option value="" className="dropdown">Select Country </option>
                                <option value="Pakistan" >Pakistan </option>
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
                                value={password}
                                // Header={Header}
                                // onChange={handleChange}
                                onChange={(e) => setPassword(e.target.value)}
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
                                value={confirmPassword}
                                // Header={Header}
                                // onChange={handleChange}
                                onChange={(e) => setconfirmPassword(e.target.value)}
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
                        <ButnField title="CREATE AN ACCOUNT" type="submit" onClick={handleRegistration} />
                    </form>
                </>
            }
        </Formik>
    )
}
export default Registration;