import React from 'react';

import { MovieGenreComponent } from './styles';

function MovieGenre({ children }) {
  return (
    <MovieGenreComponent>
      {children}
    </MovieGenreComponent>
  )
}

export default MovieGenre;