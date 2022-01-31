import React, { useContext } from 'react';
import { MoviesContext } from '../context/moviesContext';



function useMoviesContext() {
  const { movies, genres, handleFetchMovie, handleFetchAllMovies, handleFetchMovieDetails, movieDetails } = useContext(MoviesContext);

  return {
    movies,
    genres,
    handleFetchMovie,
    handleFetchAllMovies,
    handleFetchMovieDetails,
    movieDetails
  }
}

export default useMoviesContext;
