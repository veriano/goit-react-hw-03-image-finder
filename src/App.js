import { Component } from 'react/cjs/react.production.min';
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
        page: 1
    }

    getValue = data => {
        console.log(data);
        this.setState({ page: data.page, name: data.inputValue });
        const name = data.inputValue;
        const { page } = this.state;
        this.pixabayApi(name, page);
    }

    incrementPage() {
        this.setState(prevState => {
            return {
                page: prevState + 1,
            }
        })
    }

    onButtonClick() {
        this.pixabayApi();
    }

    async pixabayApi(name, page) {        

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
            this.setState({ hits: response.data.hits , page: page + 1});
           
            console.log(this.state.page);
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
                <Button onClick={ this.onButtonClick }/>
            </div>
        )
    }
}
export default App;