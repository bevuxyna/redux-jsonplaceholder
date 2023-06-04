import React from 'react';
import './PhotoList.scss';
import PhotoCard from '../PhotoCard/PhotoCard';
import Preloader from '../Preloader/Preloader';
import Error from '../Error/Error';
import Button from '../Button/Button';

function PhotoList({ loading, error, currentPage, photos, setBackPage, setNextPage }) {
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
                    photos.photos.map((photo) => {
                        return (
                            <PhotoCard
                                key={photo.id}
                                userId={photo.albumId}
                                photoId={photo.id}
                                link={photo.url}
                            />
                        )
                    })
                }
            </ul>
            <div className='photo-list__buttons'>
                <Button buttonText='Back' onclick={setBackPage} />
                <p>{currentPage}</p>
                <Button buttonText='Next' onclick={setNextPage} />
            </div>
        </section>
    );
}

export default PhotoList;