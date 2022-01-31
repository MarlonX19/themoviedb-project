
export const initialMoviesState = {};


export const moviesReducer = (state, action) => {

  switch (action.type) {
    case 'FETCHED_MOVIES':
      return { ...state, ...action.payload }
    default:
      return state;
  }

}