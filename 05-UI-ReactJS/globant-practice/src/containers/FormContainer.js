import React, { Component } from 'react';
import AddMovie from '../components/addMovie.js';

class FormContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            movies: []
        };
    }

    handleSavingClick(movie) {
        const movies = this.state.movies;
        movies.push(Object.assign({}, movie));
        this.setState({
            movies: movies
        });
        localStorage.setItem('movies', JSON.stringify(movies));
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
            <AddMovie onClick={movie => this.handleSavingClick(movie)}/>
        )
    }
}

export default FormContainer;