
import { Types } from "../Action/cart"
const INITIAL_STATE = {
    products: [],
    quantity: 0,
    totalPrice: 0
}

const cart = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.ADD_ITEM_TO_CART:
            const cartItem = state.products.find((item) => item.id === action.payload.id)
            let updatedProducts;
            let total;
            if (cartItem) {
                updatedProducts = state.products.map((item) => {
                    if (action.payload.id === item.id) {
                        item.totalPrice = item.discountPrice ? item.discountPrice  * item.count 
                                            : item.oldPrice * item.count;
                    }
                    return item;
                })
                
            } else {
                action.payload.totalPrice = action.payload.discountPrice ? action.payload.discountPrice : action.payload.oldPrice;
                updatedProducts = [...state.products, action.payload];
            }
            total = updatedProducts.reduce((acc, current) => acc + current.totalPrice, 0)

            return {
                ...state,
                products: updatedProducts,
                quantity: updatedProducts.length,
                totalPrice: total
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

        // case Types.REMOVE_FROM_CART:

        default:
            return state
    }
}

export default cart;