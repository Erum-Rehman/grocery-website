import React, { useState } from "react";
import './index.scss';
import { useNavigate } from "react-router-dom";
import Background from '../../components/Background';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButnField from "../../components/Button";
import { FiEye } from "react-icons/fi";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword, db, auth, ref, onValue } from "../../config/fire";
import { saveUser } from '../../redux/Action'
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    });
    const dispatch = useDispatch();

    const { user } = useSelector(state => state);

    console.log({user})

    let name, value;
    const getUserLogin = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserLogin({ ...userLogin, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const { email, password } = userLogin;

        if (!email || !password) {
            return toast.error("please fill required fields")
        }
        const data = {
            email, password,
        }
        // login user
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                const reference = ref(db, `/users/${user.user.uid}`);
                onValue(reference, (snapshot) => {
                    if (snapshot.exists()) {
                        let userObj = snapshot.val();
                        alert("Account Created Successfully");
                        dispatch(saveUser(userObj))
                    }
                });
            })
            .catch(err => console.log({ err }))
    }

    return (
        <>
            <form className="login-container" onSubmit={handleSubmit}>
                <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Login Your Account</h2>
                <div className="contact-cell">
                    <label>Email</label><br />
                    <input
                        type="text" name="email"
                        placeholder="Your email address"
                        className="contact-field"
                        value={userLogin.email}
                        onChange={getUserLogin}
                    />
                </div>
                <div className="contact-login">
                    <label>Password</label><br />
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
