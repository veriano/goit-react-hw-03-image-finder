import { Component } from "react/cjs/react.production.min";
import './App.css';
import Searchbar from "./Components/Searchbar";
import Button from "./Components/Button";
import ImageGallery from "./Components/ImageGallery";
const axios = require('axios');


class App extends Component {
    state = {
        name: '',
        hits: [],
        page: 0
    }

    getValue = data => {
        const name = this.state.name;
        this.setState({ value: data.inputValue, page: data.page });
        this.getPixabayResponse( name );
    
    }

    incrementPage() {
        this.setState(prevState => {
            return {
                page: prevState + 1,
            }
        })
    }
    
    getPixabayResponse = name => {

        const page = this.state.page;

         const searchParams = new URLSearchParams({
            image_type: 'photo',
            orientation: "horizontal",
            safesearch: true,
            per_page: 12,
         });
        
        const BASE_URL = 'https://pixabay.com/api/';
        const API_KEY = '24463326-9b2d5a427846ea9fa30299421';

        const hits = axios(`${BASE_URL}/?key=${API_KEY}&q=${name}&page=${page}&${searchParams}`)
            .then(data => {
                console.log(data);
                this.setState({ hits: data.data.hits });
                 this.incrementPage();
                return data.data.hits;
            });
        return hits;
    }

    render() {
        const hits = this.state.hits;
        return (
            <>
                <Searchbar onSubmitHandler={ this.getValue } /> 
                <ImageGallery values={ hits }/>
                    <Button />
            </>
        )
    }
}
export default App;