import {GET_PHOTOS_ERROR, GET_PHOTOS_FETCH, GET_PHOTOS_SUCCESS, SET_CURRENT_PAGE} from '../actions/actionTypes';

const defaultState = {
    photos: [],
    error: '',
    loading: false,
    currentPage: 1,
    totalCount: 0
}

const photosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_PHOTOS_FETCH:
            return {...state, loading: true, error: ''};

        case GET_PHOTOS_ERROR:
            return {...state, loading: false, error: action.payload};

        case GET_PHOTOS_SUCCESS:
            return {...state, loading: false, photos: action.payload, totalCount: action.payload.length};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload};

        default:
            return state;
    }
}

export default photosReducer;