import React, { Component } from 'react';

function Favourite(props) {

    const movies = props.movies;
    let favourites = [];

    if(movies) {
        favourites = movies.map((movie) => {
            if(movie.checked) {
                return  <li key={movie.title}>
                            {movie.title}, {movie.year}
                        </li>
            }
        });
    }

    return (
        <div>
            <h2>Favourites</h2>
            <ol>{favourites}</ol>
        </div>
    );
}

export default Favourite;
