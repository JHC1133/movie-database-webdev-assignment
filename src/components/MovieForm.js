"use strict;"

import React, { useState, useEffect } from "react"

const MovieForm = ({ addMovie, editingMovie, editMovie}) => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [rating, setRating] = useState('');

    // Effect used for setting the form fields with info from the chosen movie to edit.
    useEffect(() => {
        if (editingMovie) {
            setTitle(editingMovie.title);
            setYear(editingMovie.year);
            setRating(editingMovie.rating);
        } else {
            setTitle('');
            setYear('');
            setRating('');
        }
    }, [editingMovie]);

    // Handles the event when clicking the submit button. Edits info for an selected existing movie or adds a new one.
    const handleSubmit = (event) => {
        event.preventDefault();
        const movie = { title, year, rating };

        if (editingMovie) {
            editMovie(movie, editingMovie.id);
        } else {
            addMovie(movie);
        }

        // Clears the form after submission
        setTitle('');
        setYear('');
        setRating('');
    };

    return (
        // Constitution of the form that is sent with the submit button.
        <form onSubmit={handleSubmit} className="form">

            {/* Movie title */}
            <input 
            type="text"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
            />

            {/* Release date */}
            <input 
            type="number"
            placeholder="Year"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            required
            />

            {/* Personal rating */}
            <input 
            type="number"
            placeholder="Rating 1-5"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            required
            min={1}
            max={5}
            />
            <button type="submit">{editingMovie ? 'Edit Movie' : 'Add Movie'}</button>
        </form>
    );
};

export default MovieForm;