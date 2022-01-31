import api from './api';

const {
  REACT_APP_API_KEY,
  REACT_APP_DEFAULT_LANG
} = process.env;

export const fetchAllMovies = async (page) => {

  try {
    const response = await api.get(`/discover/movie?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_DEFAULT_LANG}&page=${page}`);

    return response;

  } catch (error) {
    return error.response;
  }
}

export const fetchAllGenres = async () => {

  try {
    const response = await api.get(`/genre/movie/list?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_DEFAULT_LANG}`);

    return response;

  } catch (error) {
    return error.response;
  }
}

export const fetchMovie = async (movieSearchKeyword) => {
  try {
    const response = await api.get(`/search/movie?api_key=${REACT_APP_API_KEY}&query=${movieSearchKeyword}&language=${REACT_APP_DEFAULT_LANG}`);

    return response;

  } catch (error) {
    return error.response;
  }
}