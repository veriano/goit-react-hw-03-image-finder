import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        loading: false,
        modalImage: '',
        visibleLoadMore: false
    }

    componentDidMount() {
        const parsedHits = JSON.parse(localStorage.getItem("hits"));

        if (parsedHits !== null) {
            this.setState({ hits: parsedHits });
        }
    }

    componentDidUpdate (prevProps, prevState) {
        if(this.state.hits !== prevState.hits) {
    
          localStorage.setItem("hits", JSON.stringify(this.state.hits));
        }
    }

    openModal = largeImageURL => {
        this.setState({
          showModal: true,
          modalImage: largeImageURL,
        });
    }

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal
        }));
    }

    getValue = data => {
        this.setState({ name: data.name, page: data.page, hits: []});
        const { name, page } = data;
        const response = this.pixabayApi(name, page);
        return response;
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
            const response = await axios(`${BASE_URL}/?key=${API_KEY}&q=${name}&page=${page}&${searchParams}`);

            const totalPages = response.data.totalHits / response.data.hits.length;
           
            if (response.data.hits.length < 1) {
                this.setState({ loading: false })
                toast.error('Пожалуйста введите корректное поисковое слово.');
                return;
            }
            this.setState(({ loading, hits, page, }) => {
                return {
                loading: !loading,
                hits: [...hits,...response.data.hits],
                page: page + 1,
                }
            });
            this.setState({ visibleLoadMore: true });
            if ((page - 1) >= totalPages) {
                this.setState({ loading: false, visibleLoadMore: false })
                toast.error('Извините, но это были последние изображения.');
            }
            return response.data.hits;
        } catch (error) {
            this.setState({ error });
        }
    }
    

    render() {
        const { hits, showModal, name, page, loading, modalImage, visibleLoadMore } = this.state;
       

        return (
            <div>
                <Searchbar onSubmitHandler={ this.getValue } />

                <ToastContainer autoClose={ 4000 } />

                { loading && <Loader />}

                {hits && (
                <ImageGallery articles={ hits } onImgClick={ this.openModal }/> )}

                {showModal && (
                <Modal onClose={ this.toggleModal }>
                <img src={modalImage} alt="largeImage" className='image' />
                </Modal> )}

                { visibleLoadMore && (
                <Button onButtonClick={ () => this.pixabayApi(name, page) } />)}
            </div>
        )
    }
}

export default App;