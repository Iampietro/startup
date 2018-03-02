import React, { Component } from 'react';
import AddMovie from '../components/addMovie.js';

class FormContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            movies: [],
        };
    }

    handleSavingClick(movie) {
        const movies = this.state.movies.slice();
        movies.push(movie);
        this.setState({
            movies: movies
        });
    }
    
    componentDidMount() {

        const areThereMoviesSaved = localStorage.getItem('movies');

        if (areThereMoviesSaved) {
            this.setState({
                movies: JSON.parse(areThereMoviesSaved)
            });
        } 
    }

    render() {
        return (
            <AddMovie />
        )
    }
}

export default FormContainer;