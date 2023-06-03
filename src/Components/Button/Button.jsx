import React from 'react';
import './Button.scss';

function Button({ buttonText }) {
    return (
        <button className='button'>{buttonText}</button>
    );
}

export default Button;