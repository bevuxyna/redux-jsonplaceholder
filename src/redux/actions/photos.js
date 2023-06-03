import { GET_PHOTOS_ERROR, GET_PHOTOS_FETCH, GET_PHOTOS_SUCCESS } from './actionTypes';

const getPhotosFetch = () => ({
    type: GET_PHOTOS_FETCH,
});

const getPhotosFailure = (error) => ({
    type: GET_PHOTOS_ERROR,
    payload: error,
});

const getPhotosSuccess = (users) => ({
    type: GET_PHOTOS_SUCCESS,
    payload: users,
});

export { getPhotosFetch, getPhotosSuccess, getPhotosFailure };