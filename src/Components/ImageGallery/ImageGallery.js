import React from 'react';
import './ImageGallery.css';
import ImageGalleryItem from './ImageGalleryItem';


export default function ImageGallery() {
    return (
        <ul className="ImageGallery">
            <ImageGalleryItem />
        </ul>
    )
}