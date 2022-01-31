import { Component } from 'react/cjs/react.production.min';
// import * as basicLightbox from 'basiclightbox';
import './App.css';
import Searchbar from "./Components/Searchbar";
import Button from "./Components/Button";
import ImageGallery from "./Components/ImageGallery";
import Modal from "./Components/Modal";
import Loader from "./Components/Loader"; 
const axios = require('axios');


class App extends Component {
    state = {
        hits: [],
        name: '',
        page: 1,
        showModal: false,
        loading: false
    }

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal
        }));
    }

    getValue = data => {
        console.log(data);
        this.setState({ name: data.name, page: data.page });
        const { name, page } = data;
        const response = this.pixabayApi(name, page);
        return response;
    }

    onImageClick = e => {
        if(!e.target.nodeName === 'IMG') {
            return;
        }
        this.toggleModal();
    }

    async pixabayApi(name, page) {        
        this.setState({ loading: true });

         const searchParams = new URLSearchParams({
            image_type: 'photo',
            orientation: "horizontal",
            safesearch: true,
            per_page: 12,
         });
        
        const BASE_URL = 'https://pixabay.com/api/';
        const API_KEY = '24463326-9b2d5a427846ea9fa30299421';

        try {
            const response = await axios.get(`${BASE_URL}/?key=${API_KEY}&q=${name}&page=${page}&${searchParams}`);
            console.log(response);
            console.log(this.state.page);
            this.setState(({ loading, hits, page }) => {
                return {
                    loading: !loading,
                    hits: [hits, ...response.data.hits],
                    page: page + 1
                }
                });
            console.log(this.state.page);
            return response;
        } catch (error) {
            this.setState({ error });
        }
    }

    render() {
        const { hits, showModal, name, page, loading } = this.state;
       

        return (
            <div>
                <Searchbar onSubmitHandler={ this.getValue } /> 
                { loading && <Loader />}
                <ImageGallery articles={ hits } onImageClick={ this.onImageClick } />
                {showModal && <Modal onClose={ this.toggleModal } >
                { hits.map(({ largeImageURL }) => ( 
                    <img src={ largeImageURL } alt="large" className='image' />
                ))}
                </Modal> }
                { hits.length > 0 && <Button onButtonClick={() => this.pixabayApi(name, page)} />}
            </div>
        )
    }
}
export default App;