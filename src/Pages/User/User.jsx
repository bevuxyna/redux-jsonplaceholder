import React, {useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './User.scss';
import PhotoList from '../../Components/PhotoList/PhotoList';
import { fetchPhotos } from '../../redux/asyncActions/photos';
import Button from "../../Components/Button/Button";

function User() {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const photos = useSelector((state) => state.photos);

    useEffect(() => {
        dispatch(fetchPhotos(userId));
    }, [dispatch]);

    return (
        <div className='user__container'>
            <Link to='/' className='user__link'>Back to users list</Link>
            <h2 className='user__title'>{`User ${userId}`}</h2>
            <PhotoList photos={photos}/>
            <div className='user-button__container'>
                <Button buttonText='Back' />
                <Button buttonText='Next' />
            </div>
        </div>
    );
}

export default User;