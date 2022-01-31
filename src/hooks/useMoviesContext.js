import React, { useContext } from 'react';
import { MoviesContext } from '../context/moviesContext';



function useMoviesContext() {
  const { movies, genres, handleFetchMovie, handleFetchAllMovies } = useContext(MoviesContext);

  return {
    movies,
    genres,
    handleFetchMovie,
    handleFetchAllMovies
  }
}

export default useMoviesContext;
