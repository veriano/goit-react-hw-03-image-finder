import { Component } from 'react/cjs/react.production.min';
import './ImageGallery.css';


export default class ImageGallery extends Component {
    
    render() {
        const { children } = this.props;
    return (
        <ul className="ImageGallery">
            { children }
        </ul>
    )
    }
}
