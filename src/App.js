import { Component } from "react/cjs/react.production.min";
import './App.css';
import Searchbar from "./Components/Searchbar";
import Button from "./Components/Button";
import ImageGallery from "./Components/ImageGallery";

class App extends Component {
    state = {
        values: []
    }

    addValue = data => {
    this.setState(({ values }) => {
        return {
          values: [data, ...values],
        }
      })
  }

    render() {
        const { values } = this.state;
        return (
            <>
                <Searchbar onSubmitHandler={ this.addValue } /> 
                <ImageGallery values={ values }/>
                    <Button />
            </>
        )
    }
}
export default App;