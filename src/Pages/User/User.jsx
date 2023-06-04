import React, {useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './User.scss';
import { fetchPhotos } from '../../redux/asyncActions/photos';
import PhotoList from '../../Components/PhotoList/PhotoList';

function User() {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const photos = useSelector((state) => state.photos);
    const loading = useSelector((state) => state.photos.loading);
    const error = useSelector((state) => state.photos.error);

    useEffect(() => {
        dispatch(fetchPhotos(userId));
    }, [dispatch]);

    return (
        <div className='user__container'>
            <Link to='/' className='user__link'>Back to users list</Link>
            <h2 className='user__title'>{`User ${userId} photos`}</h2>
            <PhotoList loading={loading} error={error} foundPhotos={photos} />
        </div>
    );
}

export default User;