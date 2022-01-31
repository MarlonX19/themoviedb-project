
export const initialGenresState = {};


export const genresReducer = (state, action) => {

  switch (action.type) {
    case 'FETCHED_GENRES':
      return { ...state, ...action.payload }
    default:
      return state;
  }

}
