import { combineReducers } from 'redux';
import cart from './Reducer/cart';

const rootReducer = combineReducers({
    cart,
})

export default rootReducer;