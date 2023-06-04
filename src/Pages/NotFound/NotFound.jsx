import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

function NotFound() {
    return (
        <div className='not-found'>
            <h2 className='not-found__title'>404</h2>
            <p className='not-found__subtitle'>Page not found</p>
            <p className='not-found__text'>
                The page you are looking for doesn't exist or an another error occurred. Go to
                {' '}
                <Link to='/' className='not-found__link'>Home Page.</Link>
            </p>
        </div>
    );
}

export default NotFound;