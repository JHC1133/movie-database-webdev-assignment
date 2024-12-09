import './App.css';
import React, { useState, useEffect } from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

import './styles/styles.css';

function App() {

  const [movies, setMovies] = useState([]); // State for managing the list of movie
  const [editingMovie, setEditingMovie] = useState(null); // State for keeping track of which movie is being edited

  const LOCAL_STORAGE_KEY = 'movies';
  
  // Load movies from local storage when the component mounts
  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedMovies && Array.isArray(storedMovies) && storedMovies.length > 0) {
        setMovies(storedMovies); // Set the movies state if valid data is found
    }
  }, []);

  // Save movies to local storage whenever the movies state changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(movies));
  }, [movies]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie, index) => index !== id)); // Deletes the movie with the given index
  };

  // Replaces the movie at the given index with the updated movie.
  const editMovie = (movie, id) => {
    const updatedMovies = movies.map((m, index) => (index === id ? movie : m));
    setMovies(updatedMovies);
    setEditingMovie(null);
  };

  return (
    // Main app container
    <div>
      <h1 className='title'>Movie Database</h1>
      <MovieForm addMovie={addMovie} editingMovie={editingMovie} editMovie={editMovie} />
      <MovieList movies={movies} deleteMovie={deleteMovie} setEditingMovie={setEditingMovie} />
    </div>
  );
}

export default App;
