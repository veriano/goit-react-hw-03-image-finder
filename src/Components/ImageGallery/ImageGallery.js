import React from 'react';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem';


export default function ImageGallery({ values }) {
    return (
        <ul className="ImageGallery">
            {values.map(value => {
                <ImageGalleryItem key={ value.id }
                    image={ value.webformatURL }
                    largeImage={ value.largeImageURL }   
                />
            })}
        </ul>
    )
}