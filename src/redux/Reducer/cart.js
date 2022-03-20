import { Types } from "../Action/cart"
const INITIAL_STATE = {
    products: [],
    quantity: 0,
    totalPrice: 0
}

const cart = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.UPDATE_CART:
            
            return {
                ...state,
                products: action.payload.updatedProducts,
                quantity: action.payload.updatedProducts.length,
                totalPrice: action.payload.total
            }
            break;

        case Types.CLEAR_CART:
            return {
                ...state,
                products: [],
                totalPrice: 0,
                quantity: 0
            }
        break;

        case Types.REMOVE_FROM_CART:
            const allProducts = state.products;
            allProducts.splice(action.payload, 1);
            const updatedTotal = allProducts.reduce((acc, current) => acc + current.totalPrice, 0)
            return {
                ...state,
                products: [...allProducts],
                quantity: allProducts.length,
                totalPrice: updatedTotal
            }
        break;

        default:
            return state
    }
}

export default cart;