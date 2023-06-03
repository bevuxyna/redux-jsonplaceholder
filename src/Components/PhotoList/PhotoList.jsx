import React from 'react';
import './PhotoList.scss';
import PhotoCard from '../PhotoCard/PhotoCard';

function PhotoList({ photos }) {
    return (
        <ul className='photo-list__container'>
            {photos &&
                photos.photos.map((photo) => {
                    return (
                        <PhotoCard
                            key={photo.id}
                            id={photo.albumId}
                            link={photo.url}
                        />
                    )
                })
            }
        </ul>
    );
}

export default PhotoList;