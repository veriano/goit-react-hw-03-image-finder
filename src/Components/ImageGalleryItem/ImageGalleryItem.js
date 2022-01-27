import React from 'react';
import './ImageGalleryItem.css';

export default function ImageGalleryItem({ image }) {

    return (
            <li className="ImageGalleryItem">
                <img src={ image } alt="image" className="ImageGalleryItem-image" />
            </li>
    )

}
