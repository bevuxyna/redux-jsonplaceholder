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
    const perPage = useSelector((state) => state.photos.perPage);
    // const totalCount = useSelector((state) => state.photos.totalCount);
    // const pageCount = Math.ceil(totalCount/perPage);

    useEffect(() => {
        setCurrentPage(1);
        dispatch(fetchPhotos(userId, currentPage, perPage));
    }, [dispatch, currentPage]);

    return (
        <div className='users__container'>
            <Link to='/' className='user__link'>Back to users list</Link>
            <h2 className='user__title'>{`User ${userId} photos`}</h2>
            <PhotoList
                loading={loading}
                error={error}
                photos={photos}
                currentPage={currentPage}
                setBackPage={() => dispatch(setCurrentPage(Math.max(1, currentPage - 1)))}
                setNextPage={() => dispatch(setCurrentPage(currentPage + 1))}
            />
        </div>
    );
}

export default User;