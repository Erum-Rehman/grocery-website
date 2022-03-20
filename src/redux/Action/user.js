export const Types = {
    SAVE_USER: "SAVE_USER"
}
export const saveUser = (payload) => ({
    type: Types.SAVE_USER,
    payload
})