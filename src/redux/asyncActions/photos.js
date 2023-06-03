import { getPhotosFailure, getPhotosFetch, getPhotosSuccess } from '../actions/photos';

export const fetchPhotos = (userId) => {
    return (dispatch) => {
        dispatch(getPhotosFetch());
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${userId}`)
            .then(response => response.json())
            .then(json => {
                dispatch(getPhotosSuccess(json));
            })
            .catch((error) => dispatch(getPhotosFailure(error)))
    }
}