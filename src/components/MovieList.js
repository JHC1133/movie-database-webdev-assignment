"use strict;"

import React from "react"

// The MovieList component displays a list of currently added movies with the option to edit or delete.
const MovieList = ({ movies, deleteMovie, setEditingMovie }) => {
    return (
        <ul className="movie-list">
            {movies.map((movie, index) => (
                <li key={index}>
                    <strong>{movie.title}</strong> (Year: {movie.year}, Rating: {movie.rating})
                    <button onClick={() => setEditingMovie({ ...movie, id: index})}>Edit</button>
                    <button onClick={() => deleteMovie(index)}>Delete</button>
                </li>              
            ))}
        </ul>
    );
};

export default MovieList;