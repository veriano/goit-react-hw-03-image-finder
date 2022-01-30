import React from 'react';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem';


export default function ImageGallery({ articles, onImageClick }) {
    return (
        <ul className="ImageGallery">
            { articles.map(({ id, webformatURL }) => (
                <ImageGalleryItem 
                key={ id }
                image={ webformatURL } 
                handleClick={ onImageClick }
                />
            ))}
        </ul>
    )
}