import axios from 'axios';

export const Types = {
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAILURE: "LOGIN_FAILURE",
    GET_USER_DETAILS_SUCCESS: "GET_USER_DETAILS_SUCCESS",
    GET_USER_DETAILS_FAIL: "GET_USER_DETAILS_FAIL"
}
// export const saveUser = (payload) => ({
//     type: Types.SAVE_USER,
//     payload
// })

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const loginUser = (email, password) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:8000/api/v1/login', { email, password });

        if (response.data.success) {
            localStorage.setItem('authToken', response.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: response.data.user });
        } else {
            // Handle error accordingly
            console.log(response.data.message, 'msg');
        }
    } catch (error) {
        console.error(error.message);
    }
};

export const logoutUser = () => {
    localStorage.removeItem('authToken');
    return { type: LOGOUT };
};
