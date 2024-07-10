// import { Types } from "../Action/user";

// const INITIAL_STATE = {
//     user: {},
//     token: localStorage.getItem('token') || '',
//     isAuthenticated: false,
//     loading: false,
//     error: null
// }

// export const userReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case Types.LOGIN_REQUEST:
//             return {
//                 ...state,
//                 loading: true,
//                 user: action.payload
//             };
//         case Types.LOGIN_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 isAuthenticated: true,
//                 user: action.payload,
//                 token: action.payload
//             };
//         case Types.LOGIN_FAILURE:
//             return {
//                 ...state,
//                 loading: false,
//                 error: action.payload
//             };
//         default:
//             return state;
//     }
// };
// export default userReducer;
// src/reducers/userReducer.js

import { LOGIN_SUCCESS, LOGOUT } from '../Action/user';

const initialState = {
    user: null,
    isAuthenticated: false
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log(action.type, 'action')
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            };
        case LOGOUT:
            return {
                ...state,
                user: null,
                isAuthenticated: false
            };
        default:
            return state;
    }
};

