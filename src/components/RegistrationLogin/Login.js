import React, { useState } from "react";
import './index.scss';
import { useNavigate } from "react-router-dom";
import Background from '../../components/Background';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButnField from "../../components/Button";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword, db, auth, set, ref, onValue, getAuth, onAuthStateChanged, signOut } from "../../config/fire";
import { saveUser } from '../../redux/Action'
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import axios from 'axios';
import { Formik } from "formik";
import Products from "../../pages/Products";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("invalid email address")
        .required("field req")
    ,
    password: Yup.string()
        .required("field req")
})

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [passwordType, setPasswordType] = useState("pasword");
    const [pasword, setPassword] = useState("");
    const { user } = useSelector(state => state);
    
    const handleChange = (evnt) => {
        setPassword(evnt.target.value);
    }
    const togglePassword = () => {
        if (passwordType === "pasword") {
            setPasswordType("text")
            return;
        }
        setPasswordType("pasword")
    }
    const { cart: { totalPrice, products, quantity }, userReducer: { user: { uid, name, city, password, email, country, contact, address } } } = useSelector(state => state);

    console.log({ user })
    const handleLogin = (data) => {
        const body = {
            email: data.email,
            password: data.password,
        }
        // login user
        signInWithEmailAndPassword(auth, body.email, body.password)
            .then((user) => {
                const reference = ref(db, `/users/${user.user.uid}`);
                onValue(reference, (snapshot) => {
                    if (snapshot.exists()) {
                        let userObj = snapshot.val();
                        userObj.uid = user.user.uid;
                        dispatch(saveUser(userObj))
                        navigate('/')
                        products.map(item => {
                            const reference = ref(db, `/cart/${uid}/${item.id}`);
                            set(reference, item)
                                .catch(err => console.log({ err }))
                        })
                    }
                });
            })
            .catch(err => console.log({ err }))
    }
    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={values => handleLogin(values)}
        >
            {({ values, handleChange, errors, handleSubmit, touched }) =>
                <>
                    <form className="login-container" onSubmit={handleSubmit}>
                        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Login Your Account</h2>
                        <div className="contact-cell">
                            <label>Email</label><br />
                            <input
                                type="text" name="email"
                                placeholder="Your email address"
                                className="contact-field"
                                value={values.email}
                                onChange={handleChange}
                            />
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
                        <span style={{ textAlign: 'end', color: '#f96822' }}>Forgot Password?</span>

                        <div className="checkbox-div">
                            <input type="checkbox" style={{ marginRight: '15px' }} />
                            <label style={{ color: "#505050", fontSize: '17px', fontWeight: '500' }}>
                                Remember Me</label>
                        </div>
                        <ButnField title="LOGIN ACCOUNT" type="submit" />
                    </form>
                </>
            }
        </Formik>
    )
}
export default Login;
