import React from 'react';
import './PhotoCard.scss';

function PhotoCard({ id, link }) {
    return (
        <li className='photo-card'>
            <img src={link} className='photo-card__image' alt='image' />
            <p className='photo-card__text'>{`userId: ${id}`}</p>
        </li>
    );
}

export default PhotoCard;