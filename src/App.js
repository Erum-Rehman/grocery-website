import React, { useEffect, useState } from "react";
import './App.css';
import { addOrder, deleteCart, saveCart, saveOrder, saveUser } from "./redux/Action";
import { useDispatch } from "react-redux";
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Products from './pages/Products';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Account from './pages/Account';
import Footer from './components/Footer/index';
import { Route, Routes } from "react-router-dom";
import Error from './pages/Error';
import Login from "./components/RegistrationLogin/Login";
import Register from "./components/RegistrationLogin/Register";
import LoginForm from "./pages/LoginForm";
import ProductSidebar from "./pages/ProductSidebar";
import Logout from '../src/children/Logout';
import Profile from '../src/children/Profile';
import Dashboard from '../src/children/Dashboard';
import Order from '../src/children/Order';
import ProductDetails from "./pages/ProductDetails";
import description from '../src/children/Description';
import Review from '../src/children/Review';
import Rating from "./components/Rating";
import IncDec from "./components/IncDec";
import CartBag from './components/CartBag';
import Category from "./components/Carousel";
import MobileCart from './components/CartTable/MobileCart';
import ProtectedRoute from "./ProtectedRoute";
import { onAuthStateChanged, auth, ref, db, onValue } from '../src/config/fire';
import Orders from "./pages/Orders";

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const name = user.name;
        const reference = ref(db, `/users/${user.uid}`);
        onValue(reference, (snapshot) => {
          if (snapshot.exists()) {
            let userObj = snapshot.val();
            userObj.uid = user.uid;
            localStorage.setItem('isAuthenticated', true)
            dispatch(saveUser(userObj))
            const cartReference = ref(db, `/cart/${uid}`);
            onValue(cartReference, (snapshot) => {
              if (snapshot.exists()) {
                let cartObj = snapshot.val();
                dispatch(saveCart(Object.values(cartObj)))
              }
              const orderReference = ref(db, `/shippingData/${uid}`);
              onValue(orderReference, (snapshot) => {
                if (snapshot.exists()) {
                  let orderObj = snapshot.val();
                  dispatch(saveOrder(Object.values(orderObj)))
                  dispatch(deleteCart());
                }
              });
            });
          }
        });
      } else {
        // User is signed out
        // ...
        localStorage.removeItem('isAuthenticated');
        let cartItems = localStorage.getItem('products');
        cartItems = JSON.parse(cartItems);
        dispatch(saveCart(cartItems))
      }
    });

  }, [])
  return (
    <>
      <div className="App">
        <Navbar home={window.location.pathname === "/"} />
        <div className='page-container'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
              // element={<Account/>}
             />
            {/* <Route path="/account" element={<Account />}></Route> */}
            <Route path="/logout" element={<Account />}></Route>
            <Route path="/profile" element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }></Route>
            <Route path="/description" element={<ProductDetails />}></Route>
            <Route path="/review" element={<ProductDetails />}></Route>
            <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }></Route>
            <Route path="/order" element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }></Route>
            <Route path="/product" element={<Products />}> </Route>
            <Route path="/error" element={<Error />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<LoginForm />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/productSidebar" element={<ProductSidebar />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
            <Route path="/MobileCart" element={<MobileCart />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

