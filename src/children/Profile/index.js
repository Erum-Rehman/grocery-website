import React, { useState } from "react";
import './index.scss';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiEyeOff } from "react-icons/fi";
import ButnField from "../../components/Button";
import { FiEye } from "react-icons/fi";

const Profile = () => {
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        number: "",
        address: "",
        code: "",
        password: "",
    });

    let name, value;
    const getUserProfile = (e) => {
        name = e.target.name;
        value = e.target.value;
        setProfile({ ...profile, [name]: value })
    }

    const postData = async (event) => {
        event.preventDefault();

        const { name, email, number, address, code, password } = profile;

        if (name && email && number && address && code && password) {
            const res = await fetch(
                "https://grocery-website-589ba-default-rtdb.firebaseio.com/profile.json", {
                method: "POST",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    number,
                    address,
                    code,
                    password
                })
            })
            if (res) {
                setProfile({
                    name: "",
                    email: "",
                    number: "",
                    address: "",
                    code: "",
                    password: "",
                })
                alert("profile saved successfully")
            }
        }
        else {
            alert("Please fill all the fields")
        }

    }
    return (
        <>
            <div className="account-container">
                <form className="account-preferences col-lg-9" method="POST">
                    <h5 className="profile" style={{ marginBotton: '5px' }}>Profile</h5>
                    <div className="contact-cell">
                        <label>Full Name *</label><br />
                        <input type="text"
                            placeholder="Your first name"
                            className="contact-field"
                            value={profile.name}
                            required
                            onChange={getUserProfile} />
                    </div>
                    <div className="contact-cell">
                        <label>Email *</label><br />
                        <input type="email"
                            placeholder="Enter your email"
                            className="contact-field"
                            value={profile.email}
                            required
                            onChange={getUserProfile} />
                    </div>
                    <div className="contact-cell">
                        <label>Contact no *</label><br />
                        <input type="email"
                            placeholder="XX-"
                            className="contact-field"
                            value={profile.number}
                            required
                            onChange={getUserProfile} />
                    </div>
                    <div className="contact-cell">
                        <label>Address *</label><br />
                        <input type="email"
                            placeholder="enter your address"
                            className="contact-field"
                            value={profile.address}
                            required
                            onChange={getUserProfile} />
                    </div>
                    <div className="contact-cell">
                        <label>City *</label><br />
                        <select className="contact-field" >
                            <option value="expense" className="dropdown">Town/City </option>
                            <option value="expense" >Karachi </option>
                            <option value="income">Lahore</option>
                            <option value="income">Islamabad</option>

                        </select>
                    </div>
                    <div className="contact-cell">
                        <label>Zip Code</label><br />
                        <input type="text"
                            placeholder="enter your name"
                            className="contact-field"
                            value={profile.code}
                            required
                            onChange={getUserProfile} />
                    </div>
                    <div className="contact-cell">
                        <label>Country *</label><br />
                        <select className="contact-field" >
                            <option value="expense" className="dropdown">Pakistan </option>
                            <option value="expense" >India </option>
                            <option value="income">America</option>
                            <option value="income">London</option>

                        </select>
                    </div>
                    <div className="contact-cell">
                        <label>Password *</label><br />
                        <InputGroup type="email"
                            placeholder="enter your email"
                            value={profile.password}
                            required
                            onChange={getUserProfile}>
                            <FormControl
                                placeholder="*************"
                                aria-label="*************"
                                aria-describedby="basic-addon2"
                            />
                            <label className="password-profile"><FiEye /></label>
                        </InputGroup>
                    </div>

                    <div className="contact-cell">
                        <label>Confirm Password *</label><br />
                        <InputGroup >
                            <FormControl
                                placeholder="*************"
                                aria-label="*************"
                            />  <label className="password-profile"><FiEye /></label>
                        </InputGroup>


                    </div>
                    <ButnField title="Save Changes" onClick={postData}/>
                </form>
            </div>
        </>
    )
}
export default Profile;