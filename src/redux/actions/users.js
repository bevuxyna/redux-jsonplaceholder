import { GET_USERS_ERROR, GET_USERS_FETCH, GET_USERS_SUCCESS } from './actionTypes';

const getUsersFetch = () => ({
    type: GET_USERS_FETCH,
});

const getUsersFailure = (error) => ({
    type: GET_USERS_ERROR,
    payload: error,
});

const getUsersSuccess = (users) => ({
    type: GET_USERS_SUCCESS,
    payload: users,
});

export { getUsersFetch, getUsersSuccess, getUsersFailure };