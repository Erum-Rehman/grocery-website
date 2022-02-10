export const Types = {
    ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
    CLEAR_CART: "CLEAR_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    ADD_ITEM: "ADD_ITEM"
}

export const clearCart = () => ({
    type: Types.CLEAR_CART
})
export const removeFromCart = (item) => ({
    type: Types.REMOVE_FROM_CART,
    payload: item
})
export const addToCart = (item) => ({
    type: Types.ADD_ITEM_TO_CART,
    payload: item
})
export const addItem = (item) => ({
    type: Types.ADD_ITEM,
    payload: item
})