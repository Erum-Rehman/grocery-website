import React, { useState } from "react";
import './index.scss';
// import { TiTimes } from "react-icons/ti";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from '../../components/Background';

const Contact = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        message: "",
    });

    let name, value;
    const getUserData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }

    const postData = async (event) => {
        event.preventDefault();

        const { name, email, message } = user;

        if (name && email && message) {
            const res = await fetch(
                "https://grocery-website-589ba-default-rtdb.firebaseio.com/contactform.json", {
                method: "POST",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                })
            })
            if (res) {
                setUser({
                    name: "",
                    email: "",
                    message: "",
                })
                alert("message sent successfully")
            }
        }
        else{
            alert("Please fill all the fields")
        }
        
    }

    return (
        <>
            <Background title="Contact" />
            <h2 className="contact-head">Contact Us</h2>
            <p style={{ textAlign: 'center', color: '#848484' }}>For all enquiries, please email us using the form below</p>
            <div className="main-container">

                <form className="contact-container" method="POST">
                    <div className="contact-cell">
                        <label>Your Name</label><br />
                        <input
                            type="text" name="name"
                            placeholder="enter your name"
                            value={user.name}
                            required
                            onChange={getUserData}
                            className="contact-field"
                        />
                    </div>
                    <div className="contact-cell">
                        <label>Your Email</label><br />
                        <input
                            type="email" name="email"
                            placeholder="enter your email"
                            value={user.email} required
                            onChange={getUserData}
                            className="contact-field"
                        />
                    </div>
                    <div className="contact-cell">
                        <label>Your Messages</label><br />
                        <textarea
                            name="message"
                            className="contact-msg" rows="3"
                            value={user.message} required
                            onChange={getUserData}
                        ></textarea>
                    </div>
                    <Button id="button-addon2" className='msg-btn' onClick={postData}>
                        Send Message
                    </Button>
                </form>
            </div>
        </>
    )
}
export default Contact