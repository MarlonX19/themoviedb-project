import React from 'react';

import { MovieGenreContainer } from './styles';

function MovieGenre({ children }) {
  return (
    <MovieGenreContainer>
      {children}
    </MovieGenreContainer>
  )
}

export default MovieGenre;