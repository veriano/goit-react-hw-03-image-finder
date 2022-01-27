import './Searchbar.css';
import { Component } from "react/cjs/react.production.min";


export default class Searchbar extends Component {
    state = {
        inputValue: '',
    }

    handleChange = e => {
        const { value } = e.currentTarget;
        console.log(value);

        this.setState({ inputValue: value })
    }

    handleSubmit = e => {
        e.preventDefault();

        this.resetPage();

        this.props.onSubmitHandler(this.state);

        this.reset();
    }

    reset() {
          this.setState({ inputValue: '' })
    }

    resetPage() {
        this.setState({ page: 1 })
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