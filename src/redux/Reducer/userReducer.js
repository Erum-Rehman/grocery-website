import { Types } from "../Action/user";

const INITIAL_STATE = {
    user : {}
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.Types){
        case Types.SAVE_USER: 
            console.log({'app':action})
            return{
                ...state,
                user: action.payload
            }

        default:
            return state
    }
}
export default userReducer;
