import React from 'react';
import './ImageGalleryItem.css';

export default function ImageGalleryItem({ image, handleClick }) {

    return (
            <li className="ImageGalleryItem" >
                <img src={ image } alt="response from API" className="ImageGalleryItem-image" onClick={ handleClick }/>
            </li>
    )

}
