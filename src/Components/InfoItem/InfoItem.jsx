import React from 'react';
import './InfoItem.scss';

function InfoItem({ image, altText, text }) {
    return (
        <div className='info-item__container'>
            <img src={image} className='info-item__image' alt={altText} />
            <p className='info-item__text'>{text}</p>
        </div>
    );
}

export default InfoItem;