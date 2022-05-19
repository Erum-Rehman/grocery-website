export const Types = {
    UPDATE_CART: "UPDATE_CART",
    CLEAR_CART: "CLEAR_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    ADD_ITEM: "ADD_ITEM",
    SAVE_CART: "SAVE_CART",
    DELETE_CART: "DELETE_CART",
}

export const clearCart = () => ({
    type: Types.CLEAR_CART
})
export const removeFromCart = (payload) => ({
    type: Types.REMOVE_FROM_CART,
    payload
})
export const updateCart = (payload) => ({
    type: Types.UPDATE_CART,
    payload
})
export const saveCart = (payload) => ({
    type: Types.SAVE_CART,
    payload
})
export const deleteCart = () => ({
    type: Types.DELETE_CART,
})
