import React, { useState } from "react";
import './index.scss';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiEyeOff } from "react-icons/fi";
import ButnField from "../../components/Button";
import { FiEye } from "react-icons/fi";
import { useSelector } from "react-redux";
import { auth, db, ref, set } from "../../config/fire";
import * as Yup from 'yup';
import axios from 'axios';
import { Formik } from "formik";

const RegexExp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/)
const ProfileSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, "less than limit")
        .max(20, "exeeds the limit")
        .matches(RegexExp, "wrong pattern")
})
const Profile = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [profilePassword, setProfilePassword] = useState("");
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    let value;
    const handleChange = (evnt) => {
        setProfilePassword(evnt.target.value);
    }

    const { userReducer: { user, user: { uid, name, city, password, email, country, contact, address } } } = useSelector(state => state);
    console.log(user)
    const handleUserProfile = (data) => {

        // Update user
        const reference = ref(db, `/users/${uid}`);
        set(reference, data).then(user => {
            alert("Account Updated");
            console.log({ "done": user })
        })
            .catch(err => console.log({ err }))
    }
    return (
        <Formik
            initialValues={{
                name: name,
                city: city,
                contact: contact,
                address: address,
                country: country,
                password: password,
                email: email,
            }}
            validationSchema={ProfileSchema}
            onSubmit={values => handleUserProfile(values)}
        >
            {({ values, errors, handleChange, handleSubmit, touched }) =>
                <>
                    <div className="account-container">
                        <form className="account-preferences col-lg-9" onSubmit={handleSubmit}>
                            <h5 className="profile" style={{ marginBotton: '5px' }}>Profile</h5>
                            <div className="contact-cell">
                                <label>Full Name *</label><br />
                                <input type="text" name="name"
                                    placeholder="Your first name"
                                    className="contact-field"
                                    value={values.name}
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="contact-cell">
                                <label>Email *</label><br />
                                <input type="email" name="email"
                                    disabled
                                    placeholder="Enter your email"
                                    className="contact-field"
                                    value={values.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="contact-cell">
                                <label>Contact no *</label><br />
                                <input type="Number" name="contact"
                                    placeholder="XX-"
                                    className="contact-field"
                                    value={values.contact}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="contact-cell">
                                <label>Address *</label><br />
                                <input type="text" name="address"
                                    placeholder="enter your address"
                                    className="contact-field"
                                    value={values.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="contact-cell">
                                <label>City *</label><br />
                                <select className="contact-field"
                                    name="city"
                                    value={values.city}
                                    onChange={handleChange}
                                >
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
                                    onChange={handleChange}
                                >
                                    <option value="country" className="dropdown">Country </option>
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
                                    value={values.password}
                                    onChange={handleChange}
                                />
                                <button type="button" className="password-login" onClick={togglePassword}>
                                    {passwordType === "password" ? <FiEyeOff /> : <FiEye />}
                                </button>
                            </div>
                            <ButnField title="Save Changes" type="submit" />
                        </form>
                    </div>
                </>
            }
        </Formik>
    )
}
export default Profile;