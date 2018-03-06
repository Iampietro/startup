import React, { Component } from 'react';
import AddMovie from '../components/addMovie.js';
import Favourite from '../components/favourite.js';
import AllMovies from '../components/allMovies.js';
import Edit from '../components/edit.js';
import '../App.css';

class Container extends Component {

    constructor(props){
        super(props);
        this.state = {
            movies: [],
            movieToUpdate: null,
            editingMovie: false
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

    handleMovieToEdit(movie) {
        if (!this.state.editingMovie) {
                this.setState({
                movieToUpdate: movie,
                editingMovie: true
            });
        }
    }

    updateMovie(updatedMovie) {
        const index = this.state.movies.indexOf(this.state.movieToUpdate); //Index of the movie to update/delete
        let movies = this.state.movies;
        if (updatedMovie.deleted) {
            movies = movies.filter(movie => movie !== updatedMovie);
        } else {
            movies[index] = updatedMovie;
        }
        this.setState({
            movies: movies,
            movieToUpdate: null,
            editingMovie: false
        });
        localStorage.setItem('movies', JSON.stringify(movies));
    }


    render() {
        const movies = this.state.movies;
        const movieToUpdate = this.state.movieToUpdate;
        const isEditing = this.state.editingMovie;
        return (
           <div>
                {   isEditing
                        ?   <div className="row">
                                <div className="column full">
                                    <Edit movie={movieToUpdate}
                                          onClick={movie => this.updateMovie(movie)}
                                    />
                                </div>
                            </div>
                        :   <div className="row">
                                <div className="column full">
                                    <AddMovie onClick={movie => this.handleSavingClick(movie)}/>
                                </div>
                            </div>

                }
               <div className="row">
                    <div className="column half inline">
                        <Favourite movies={movies} />
                    </div>
                    <div className="column half inline">
                        <AllMovies onClick={movie => this.handleMovieToEdit(movie)}
                                   movies={movies} />
                    </div> 
               </div>
               
           </div>
           
        );
    }
}

export default Container;
