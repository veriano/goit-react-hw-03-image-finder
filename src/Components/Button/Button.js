import React from 'react';
import './Button.css';

export default function Button({ onButtonClick }) {
    return (
        <button className='Button' type='button' onClick={ onButtonClick }>Load more</button>
    )
}