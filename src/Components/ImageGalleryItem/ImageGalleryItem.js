import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

export default function ImageGalleryItem({ articles, onImgClick }) {

    return (
        <>
            {articles.map(({ id, webformatURL, largeImageURL, tags }) => 
                    <li className="ImageGalleryItem" key={ id }>
                    <img src={webformatURL} alt={ tags } className="ImageGalleryItem-image" onClick={() => onImgClick(largeImageURL)} />
                    </li>
            )}
        </>
    )

}

ImageGalleryItem.propTypes = {
    id: PropTypes.string,
    webformatURL: PropTypes.string,
}
