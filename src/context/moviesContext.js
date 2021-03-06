import { useEffect, createContext, useReducer } from "react";
import { fetchAllMovies, fetchAllGenres, fetchMovie, fetchMovieDetails } from "../services/movies";
import { initialMoviesState, moviesReducer } from './reducers/moviesReducer';
import { initialGenresState, genresReducer } from './reducers/genresReducer';
import { movieDetailsReducer, initialMovieDetailsState } from './reducers/movieDetailsReducer';

export const MoviesContext = createContext({});

function MoviesContextProvider({ children }) {
  const [movies, moviesDispatch] = useReducer(moviesReducer, initialMoviesState);
  const [genres, genresDispatch] = useReducer(genresReducer, initialGenresState);
  const [movieDetails, movieDetailsDispatch] = useReducer(movieDetailsReducer, initialMovieDetailsState);

  const handleFetchAllMovies = async (page) => {
    const response = await fetchAllMovies(page);

    if (response.status === 200) {
      moviesDispatch({ type: 'FETCHED_MOVIES', payload: response.data })
    }
  }

  const handleFetchMovie = async (movieParam) => {
    const response = await fetchMovie(movieParam);

    if (response.status === 200) {
      moviesDispatch({ type: 'FETCHED_MOVIES', payload: response.data })
    }
  }

  const handleFetchMovieDetails = async (movieId) => {
    const response = await fetchMovieDetails(movieId);

    if (response.status === 200) {
      movieDetailsDispatch({ type: 'FETCHED_MOVIE_DETAILS', payload: response.data })
    }
  }

  const handleFetchAllGenres = async () => {
    const response = await fetchAllGenres();

    if (response.status === 200) {
      let genresToObj = {};
      const { data: { genres } } = response;

      genres.map((genre, index) => {
        genresToObj[genre.id] = genre.name

      })
      genresDispatch({ type: 'FETCHED_GENRES', payload: genresToObj })
    }
  }


  useEffect(() => {
    handleFetchAllGenres()
  }, [])


  return (
    <MoviesContext.Provider
      value={{
        movies,
        genres,
        handleFetchMovie,
        handleFetchAllMovies,
        handleFetchMovieDetails,
        movieDetails
      }}
    >
      {children}
    </MoviesContext.Provider>
  )
}

export default MoviesContextProvider;
