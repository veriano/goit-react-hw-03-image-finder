import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import './Modal.css';

export default class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown );
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown );
    }

    handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdpropClick = e => {
        if(e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

    render() {
        return (
        <div className="Overlay" onClick={ this.handleBackdpropClick }>
                <div className="Modal" >
                    <img src={largeImageURL} alt='largeImage' className='image' />
            </div>
        </div>
        )
    }
}