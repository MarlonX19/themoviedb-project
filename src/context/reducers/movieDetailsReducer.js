
export const initialMovieDetailsState = {};


export const movieDetailsReducer = (state, action) => {

  switch (action.type) {
    case 'FETCHED_MOVIE_DETAILS':
      return { ...state, ...action.payload }
    default:
      return state;
  }

}
