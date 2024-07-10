const INITIAL_STATE = {
    user: null,
    loading: true,
    error: null
};

export default function getUser(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_USER_DETAILS_SUCCESS':
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        case 'GET_USER_DETAILS_FAIL':
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
}