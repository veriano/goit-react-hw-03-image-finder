import { Component } from "react/cjs/react.production.min";
import './Searchbar.css';


export default class Searchbar extends Component {
    state = {
        inputValue: ''
    }

    handleChange = e => {
        const { value } = e.currentTarget.trim();

        this.setState({ inputValue: value })
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmitHandler(this.state);
        this.reset();
    }

    reset = () => {
          this.setState({ inputValue: '' })
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
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}