import React, {useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './User.scss';
import { fetchPhotos } from '../../redux/asyncActions/photos';
import PhotoList from '../../Components/PhotoList/PhotoList';
import Button from '../../Components/Button/Button';
import Preloader from '../../Components/Preloader/Preloader';

function User() {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const photos = useSelector((state) => state.photos);
    const loading = useSelector((state) => state.photos.loading);

    useEffect(() => {
        dispatch(fetchPhotos(userId));
    }, [dispatch]);

    return (
        <div className='user__container'>
            <Link to='/' className='user__link'>Back to users list</Link>
            <h2 className='user__title'>{`User ${userId} photos`}</h2>
            {loading ? (
                <Preloader />
            ) : (
                <>
                    <PhotoList foundPhotos={photos} />
                    <div className='user-button__container'>
                        <Button buttonText='Back' />
                        <Button buttonText='Next' />
                    </div>
                </>
            )
            }
        </div>
    );
}

export default User;