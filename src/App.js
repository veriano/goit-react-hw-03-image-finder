import { Component } from "react/cjs/react.production.min";
import './App.css';
import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";

class App extends Component {
    state = {
        galleryItems: []
    }

    addGalleryItem = data => {
        this.setState(prevState => {
            return {
                galleryItems: []
            }
        })
    }


    render() {
        return (
            <>
                <Searchbar onSubmitHandler={ this.addGalleryItem }/> 
                <ImageGallery />
            </>
        )
    }
}
export default App;