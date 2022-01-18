import './App.css';
import Home from './pages/Home/Home';
import Products from './pages/Products';
import About from './pages/About';
import Product from './components/Product';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Account from './pages/Account';
import { Switch, Route, Routes } from "react-router-dom";
import Profile from './children/Profile'

function App() {
  return (
    <>
    <div className="App">
    <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Account" element={<Account/>}></Route>
            <Route path="/Product" element={<Product/>}> </Route> 
            <Route path="/Profile" element={<Profile/>}> </Route>           
        </Routes>
    </div>
    </>
  );
}

export default App;

