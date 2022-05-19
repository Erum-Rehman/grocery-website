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

        case Types.SAVE_CART:
            return{
                products: [...action.payload],
                quantity: action.payload.length,
                totalPrice: action.payload.reduce((acc, current) => acc + current.totalPrice, 0)
            }
            break;
        
        case Types.DELETE_CART:
            return {
                ...state,
                products: [],
                totalPrice: 0,
                quantity: 0,
            }
            break;

        case Types.REMOVE_FROM_CART:
            console.log({action})
            return {
                ...state,
                products: action.payload.products,
                quantity: action.payload.products.length,
                totalPrice: action.payload.updatedTotal
            }
            break;

        default:
            return state
    }
}

export default cart;