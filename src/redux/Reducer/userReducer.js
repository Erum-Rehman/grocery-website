import { Types } from "../Action/user";

const INITIAL_STATE = {
    user : {}
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case Types.SAVE_USER: 
            return{
                ...state,
                user: action.payload
            }

        default:
            return state
    }
}
export default userReducer;
