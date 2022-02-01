import React from 'react';
import './ImageGalleryItem.css';

export default function ImageGalleryItem({ articles, onImage }) {

    return (
        <>
            {articles.map(({ id, webformatURL, largeImageURL }) => 
                    <li className="ImageGalleryItem" key={ id }>
                        <img src={ webformatURL } data-sourse={ largeImageURL } alt="response from API" className="ImageGalleryItem-image" onClick={ onImage }/>
                    </li>
            )}
        </>
    )

}
