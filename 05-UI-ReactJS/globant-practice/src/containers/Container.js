import React, { Component } from 'react';
import AddMovie from '../components/addMovie.js';
import Favourite from '../components/favourite.js';

class Container extends Component {

    constructor(props){
        super(props);
        this.state = {
            movies: [],
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

    handleChange(active) {
        this.setState({
            active: "favourite"
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
        const movies = this.state.movies;
        return (
           <div>
               <AddMovie onClick={movie => this.handleSavingClick(movie)}/>
               <Favourite movies={movies} />
           </div>
        )
    }
}

export default Container;