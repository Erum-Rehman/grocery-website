import React, {useState} from 'react'
import './index.scss'
import products from '../../mock/product';
import Rating from '../Rating';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from '../../pages/Cart';
// import { updateCart } from '../../redux/Action'
import { updateCartItem } from '../../redux/Thunk/cart'
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const Product = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { cart: { totalPrice, products: cartProducts, quantity } } = useSelector(state => state);

    const addItem = (item) => {
        item.count = item.count ? item.count + 1 : 1;
        dispatch(updateCartItem(item, cartProducts));
    }

    // const [ product, setProduct ] = useState();

    
    return (
        <>
            {
                products.map((item) => (
                    <div className="products" key={item.id} onClick={() => navigate(`/productDetails/${item.id}`)}>
                        {<div className="product-img">
                            <img src={item.image} />
                        </div>}
                        <h5 className="product-title">{item.name}</h5>
                        <span className="old-price">${item.oldPrice}/kg</span>
                        <span className="new-price">${item.discountPrice}/kg</span>
                        <div className='product-rating'> <Rating /></div>
                        <button id="button-addon2" className="product-butn" onClick={() => addItem(item)}>
                            {item.button}
                        </button>
                    </div>))
            }
        </>
    )
}
export default Product;