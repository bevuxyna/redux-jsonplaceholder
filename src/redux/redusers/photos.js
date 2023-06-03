import { GET_PHOTOS_ERROR, GET_PHOTOS_FETCH, GET_PHOTOS_SUCCESS } from '../actions/actionTypes';

const defaultState = {
    photos: [],
    error: '',
    loading: false
}

const photosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_PHOTOS_FETCH:
            return {...state, loading: true, error: ''};

        case GET_PHOTOS_ERROR:
            return {...state, loading: false, error: action.payload};

        case GET_PHOTOS_SUCCESS:
            return {...state, loading: false, photos: action.payload};

        default:
            return state;
    }
}

export default photosReducer;