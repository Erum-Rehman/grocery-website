export const Types = {
    SAVE_ORDER: "SAVE_ORDER",
    ADD_ORDER: "ADD_ORDER",
    DEL_ORDER: "DEL_ORDER"
}
export const saveOrder = (payload) => ({
    type: Types.SAVE_ORDER,
    payload
})
export const addOrder = (payload) => ({
    type: Types.ADD_ORDER,
    payload
})
export const delOrder = () => ({
    type: Types.PLACE_ORDER,
})