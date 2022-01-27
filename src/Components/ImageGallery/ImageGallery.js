import React from 'react';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem';


export default function ImageGallery({ values }) {
    return (
        <ul className="ImageGallery">
            { values.map(({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem key={ id }
                    image={ webformatURL }
                    largeImage={ largeImageURL }   
                />
            ))}
        </ul>
    )
}