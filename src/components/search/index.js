import React, { useState } from 'react';
import useMoviesContext from '../../hooks/useMoviesContext';
import useDebounce from '../../hooks/useDebounce';

import { SearchComponent } from './styles';

function Search() {
  const { handleFetchMovie } = useMoviesContext();
  const debouncedFunction = useDebounce(handleFetchMovie, 700);


  return (
    <SearchComponent
      onChange={({ target: { value } }) => debouncedFunction(value)}
      type='search'
      placeholder='Busque um filme por nome ou gênero'
    />
  )
}

export default Search;
