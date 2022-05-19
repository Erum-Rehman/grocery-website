import { Types } from "../Action/order";

const INITIAL_STATE = {
    shippingData: []
}
const order = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.ADD_ORDER:
            return {
                ...state,
                shippingData: action.payload
            }

        case Types.SAVE_ORDER:
            return {
                shippingData: action.payload
            }

        case Types.DEL_ORDER:
            return {
                shippingData: []
            }
        default:
            return state
    }
}
export default order;

