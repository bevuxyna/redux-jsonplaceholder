import React, {useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './User.scss';
import PhotoList from '../../Components/PhotoList/PhotoList';
import { fetchPhotos } from '../../redux/asyncActions/photos';

function User() {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const photos = useSelector((state) => state.photos);

    // useEffect(() => {
    //     dispatch(fetchPhotos);
    // }, []);

    return (
        <div className='user__container'>
            <Link to='/' className='user__link'>Back to users list</Link>
            <h2 className='user__title'>{`User ${userId}`}</h2>
            <button onClick={() => dispatch(fetchPhotos(userId))}>Get photos</button>
            <PhotoList photos={photos}/>
        </div>
    );
}

export default User;