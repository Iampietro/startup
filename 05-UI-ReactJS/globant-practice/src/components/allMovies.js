import React, { Component } from 'react';
import '../App.css';

function AllMovies(props) {

    let movies = props.movies;

    if(movies) {
        movies = movies.map((movie) => {
            return  <li key={movie.title}
                        onClick={() => props.onClick(movie)}
                        className="for-movies">
                        {movie.title}, {movie.year}
                    </li>
        });
    }

    return (
        <div>
            <h2>All Movies</h2>
            <p>(Click to Edit)</p>
            <ol>{movies}</ol>
        </div>
    );
}

export default AllMovies;
