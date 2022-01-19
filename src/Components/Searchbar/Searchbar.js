import './Searchbar.css';
import { Component } from "react/cjs/react.production.min";
const axios = require('axios');


export default class Searchbar extends Component {
    state = {
        inputValue: '',
        page: 1
    }

    handleChange = e => {
        const { value } = e.currentTarget;

        this.setState({ inputValue: value })
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmitHandler(this.state.inputValue);

        this.getPixabayResponse(e);

        this.reset();
    }

    incrementPage() {
        this.setState(prevState => {
            return {
                page: prevState + 1,
            }
        })
    }

    resetPage() {
        this.setState({ page: 1 })
    }

    reset = () => {
          this.setState({ inputValue: '' })
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
                 this.incrementPage();
                return data.data.hits;
            });
        return hits;
    }

   

    render() {

        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={ this.handleSubmit }>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        onChange={ this.handleChange }
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}