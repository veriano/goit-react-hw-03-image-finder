import React from 'react';
import './Button.css';

export default function Button({ onClick }) {
    return (
        <button className='Button' type='button' onClick={() => onClick}>Load more</button>
    )
}