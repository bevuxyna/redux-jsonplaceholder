import React, {useEffect, useState} from 'react';
import './PhotoList.scss';
import PhotoCard from '../PhotoCard/PhotoCard';

function PhotoList({ foundPhotos }) {
    const [photos, setPhotos] = useState([]);
    const [maxCards, setMaxCards] = useState(10);

    function setMovies() {
        let photos = [];
        foundPhotos.photos.forEach((item, i) => {
            if (i < maxCards) {
                photos.push(item);
            }
        });
        setPhotos(photos);
    }

    useEffect(() => {
        setMovies();
    }, [foundPhotos]);

    return (
        <ul className='photo-list__container'>
            {photos &&
                photos.map((photo) => {
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