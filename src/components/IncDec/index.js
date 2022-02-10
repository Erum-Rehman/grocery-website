import './index.css';
import { IoIosAdd, IoIosRemove } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/Action';
import { useSelector } from "react-redux";

const IncDec = () => {
    const dispatch = useDispatch();
    const { cart: { totalPrice, products, quantity } } = useSelector(state => state);
    const addItem = (item) => {
        item.count = item.count ? item.count + 1 : 1;
        dispatch(addToCart(item));
    }
    return (
        <>
            <div className='add-remove-container'>
                <button><IoIosRemove /></button>
                <div>1</div>
                <button onClick={() => addItem(products.item)}><IoIosAdd /></button>
            </div>
        </>
    )
}
export default IncDec

