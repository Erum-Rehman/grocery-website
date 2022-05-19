import { combineReducers } from 'redux';
import cart from './Reducer/cart';
import userReducer from './Reducer/userReducer';
import order from './Reducer/order';

const rootReducer = combineReducers({
    cart,
    userReducer,
    order,
})

export default rootReducer;