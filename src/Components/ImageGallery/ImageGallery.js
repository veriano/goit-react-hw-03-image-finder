import React from 'react';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem';


export default function ImageGallery({ hits }) {
    return (
        <ul className="ImageGallery">
            {hits.map(hit => {
                <ImageGalleryItem key={ hit.id }
                    image={ hit.webformatURL }
                    largeImage={ hit.largeImageURL }   
                />
            })}
        </ul>
    )
}