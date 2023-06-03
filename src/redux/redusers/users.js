import { GET_USERS_ERROR, GET_USERS_FETCH, GET_USERS_SUCCESS } from '../actions/actionTypes';

const defaultState = {
    users: [],
    error: '',
    loading: false
}

const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_USERS_FETCH:
            return {...state, loading: true, error: ''};

        case GET_USERS_ERROR:
            return {...state, loading: false, error: action.payload};

        case GET_USERS_SUCCESS:
            return {...state, loading: false, users: action.payload};

        default:
            return state;
    }
}

export default usersReducer;