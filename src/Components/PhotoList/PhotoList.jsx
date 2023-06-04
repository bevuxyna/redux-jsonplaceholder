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
            {photos.photos.length !== 0 ? (
                <ul className='photo-list__container'>
                    {photos.photos.map((photo) => {
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
            ) : (
                <p className='photo-list__error'>No data</p>
            )}
            <div className='photo-list__buttons'>
                <Button buttonText='Back' onclick={setBackPage} />
                <p className='photo-list__page'>{currentPage}</p>
                <Button buttonText='Next' onclick={setNextPage} />
            </div>
        </section>
    );
}

export default PhotoList;