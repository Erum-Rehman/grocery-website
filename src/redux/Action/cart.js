export const Types = {
    UPDATE_CART: "UPDATE_CART",
    CLEAR_CART: "CLEAR_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    ADD_ITEM: "ADD_ITEM"
}

export const clearCart = () => ({
    type: Types.CLEAR_CART
})
export const removeFromCart = (payload) => ({
    type: Types.REMOVE_FROM_CART,
    payload
})
export const updateCart = (item) => ({
    type: Types.UPDATE_CART,
    payload: item
})
