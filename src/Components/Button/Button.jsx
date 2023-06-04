import React from 'react';
import './Button.scss';

function Button({ buttonText, onclick }) {
    return (
        <button className='button' onClick={onclick}>{buttonText}</button>
    );
}

export default Button;