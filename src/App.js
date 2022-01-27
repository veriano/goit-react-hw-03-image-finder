import { Component } from "react/cjs/react.production.min";
import './App.css';
import Searchbar from "./Components/Searchbar";
import Button from "./Components/Button";
import ImageGallery from "./Components/ImageGallery";
import Modal from "./Components/Modal";
const axios = require('axios');


class App extends Component {
    state = {
        hits: [],
        name: '',
        page: 1
    }

    getValue = data => {
        console.log(data);
        this.setState({ name: data });
        const { name } = this.state;
        this.pixabayApi( name );
    }

    incrementPage() {
        this.setState(prevState => {
            return {
                page: prevState + 1,
            }
        })
    }
    async pixabayApi(name) {        
        const { page } = this.state;

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
            this.setState({ hits: response.data.hits, page: this.incrementPage() });
        } catch (error) {
            this.setState({ error });
        }
      
    }

    render() {
        const { hits } = this.state;
        return (
            <>
                <Searchbar onSubmitHandler={ this.getValue } /> 
                <ImageGallery values={ hits } />
                    <Button />
            </>
        )
    }
}
export default App;