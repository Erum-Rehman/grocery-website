import { combineReducers } from 'redux';
import cart from './Reducer/cart';
import userReducer from './Reducer/userReducer';

const rootReducer = combineReducers({
    cart,
    userReducer
})

export default rootReducer;