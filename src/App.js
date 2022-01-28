import { Component } from "react";
// import * as basicLightbox from 'basiclightbox';
import './App.css';
import Searchbar from "./Components/Searchbar";
import Button from "./Components/Button";
import ImageGallery from "./Components/ImageGallery";
// import Modal from "./Components/Modal";

const axios = require('axios');


class App extends Component {
    state = {
        hits: [],
        name: '',
        page: null
    }

    getValue = data => {
        console.log(data);
        this.setState({ page: data.page, name: data.inputValue });
        // const name = data.inputValue;
        this.pixabayApi();
    }

    incrementPage() {
        this.setState(prevState => {
            return {
                page: prevState + 1,
            }
        })
    }

    async pixabayApi() {        
        // const { page } = this.state;
        // const { name } = this.state;

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
            console.log(response.data);
            this.setState({ hits: response.data.hits, page: this.incrementPage() });
        } catch (error) {
            this.setState({ error });
        }
      
    }

    render() {
        const { hits } = this.state;
        return (
            <div>
                <Searchbar onSubmitHandler={ this.getValue } /> 
                <ImageGallery articles={ hits } handleClick={ this.handleImadeGallery }/>
                <Button />
            </div>
        )
    }
}
export default App;