import React from 'react';
import './PhotoCard.scss';

function PhotoCard({ userId, photoId, link }) {
    return (
        <li className='photo-card'>
            <img src={link} className='photo-card__image' alt='image' />
            <p className='photo-card__text'>{`userId: ${userId}`}</p>
            <p className='photo-card__text'>{`photoId: ${photoId}`}</p>
        </li>
    );
}

export default PhotoCard;