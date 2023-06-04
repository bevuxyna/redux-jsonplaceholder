import { getPhotosFailure, getPhotosFetch, getPhotosSuccess } from '../actions/photos';

export const fetchPhotos = (id, page) => {
    return (dispatch) => {
        dispatch(getPhotosFetch());
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}&_page=${page}&_limit=10`)
            .then(response => response.json())
            .then(json => {
                dispatch(getPhotosSuccess(json));
            })
            .catch((error) => dispatch(getPhotosFailure(error)))
    }
}