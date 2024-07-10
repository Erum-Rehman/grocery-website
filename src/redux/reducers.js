import { combineReducers } from 'redux';
import cart from './Reducer/cart';
import {userReducer} from './Reducer/userReducer';
import order from './Reducer/order';
import getUser from './Reducer/getUser';

const rootReducer = combineReducers({
    cart,
    user: userReducer,
    order,
    getUser
})
export default rootReducer;