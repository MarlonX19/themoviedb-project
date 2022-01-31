import React, { useState, useEffect } from 'react';
import useMoviesContext from '../../hooks/useMoviesContext';

import { Header, Container, Search, CardComponent, Pagination, NotFoundComponent } from '../../components';

const LIMIT = 20;

function Home() {
  const [page, setPage] = useState(1);
  const { movies: { results, total_results }, handleFetchAllMovies } = useMoviesContext();

  useEffect(() => {
    handleFetchAllMovies(page);
  }, [page])

  return (
    <>
      <Header />
      <Container>
        <Search />
        {
          results && results.length > 0 ? (
            results.map(movie =>
              <CardComponent key={movie.id} movie={movie} />
            )
          ) : <NotFoundComponent />
        }
        <CardComponent />
        <Pagination
          limit={LIMIT}
          total={total_results}
          page={page}
          setPage={setPage}
        />
      </Container>
    </>
  )
}

export default Home;