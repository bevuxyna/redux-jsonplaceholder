import { getUsersFailure, getUsersFetch, getUsersSuccess } from '../actions/users';

export const fetchUsers = (dispatch) => {
    return function () {
        dispatch(getUsersFetch());
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                dispatch(getUsersSuccess(json));
            })
            .catch((error) => dispatch(getUsersFailure(error)))
    }
}