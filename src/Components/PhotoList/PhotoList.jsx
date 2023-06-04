import React, {useEffect, useState} from 'react';
import './PhotoList.scss';
import PhotoCard from '../PhotoCard/PhotoCard';
import Preloader from '../Preloader/Preloader';
import Error from '../Error/Error';
import Button from '../Button/Button';

function PhotoList({ loading, error, foundPhotos }) {
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

    if (loading) {
        return <Preloader />;
    }

    if (error) {
        return <Error />;
    }

    return (
        <section className='photo-list'>
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
            <div className='photo-list__buttons'>
                <Button buttonText='Back' />
                <Button buttonText='Next' />
            </div>
        </section>
    );
}

export default PhotoList;