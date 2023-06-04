import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './User.scss';
import { fetchPhotos } from '../../redux/asyncActions/photos';
import { setCurrentPage } from '../../redux/actions/photos';
import PhotoList from '../../Components/PhotoList/PhotoList';

function User() {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const photos = useSelector((state) => state.photos);
    const loading = useSelector((state) => state.photos.loading);
    const error = useSelector((state) => state.photos.error);
    const currentPage = useSelector((state) => state.photos.currentPage);
    const totalCount = useSelector((state) => state.photos.totalCount);

    useEffect(() => {
        dispatch(fetchPhotos(userId, currentPage));
    }, [dispatch, currentPage]);

    return (
        <div className='user__container'>
            <Link to='/' className='user__link'>Back to users list</Link>
            <h2 className='user__title'>{`User ${userId} photos`}</h2>
            <PhotoList
                loading={loading}
                error={error}
                photos={photos}
                currentPage={currentPage}
                setBackPage={() => dispatch(setCurrentPage(currentPage - 1))}
                setNextPage={() => dispatch(setCurrentPage(currentPage + 1))}
            />
        </div>
    );
}

export default User;