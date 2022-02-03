import { Component } from 'react/cjs/react.production.min';
import './ImageGallery.css';


export default class ImageGallery extends Component {
    
    render() {
    return (
        <ul className="ImageGallery">
            {this.props.children}
        </ul>
    )
    }
}
