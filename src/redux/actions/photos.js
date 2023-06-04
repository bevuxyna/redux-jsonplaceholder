import {GET_PHOTOS_ERROR, GET_PHOTOS_FETCH, GET_PHOTOS_SUCCESS, SET_CURRENT_PAGE} from './actionTypes';

const getPhotosFetch = () => ({
    type: GET_PHOTOS_FETCH,
});

const getPhotosFailure = (error) => ({
    type: GET_PHOTOS_ERROR,
    payload: error,
});

const getPhotosSuccess = (photos) => ({
    type: GET_PHOTOS_SUCCESS,
    payload: photos,
});

const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    payload: page,
})

export { getPhotosFetch, getPhotosSuccess, getPhotosFailure, setCurrentPage };