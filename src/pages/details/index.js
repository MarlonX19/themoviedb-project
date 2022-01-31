import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Header, MovieGenreComponent, MovieGenreContainer } from '../../components'
import useMoviesContext from '../../hooks/useMoviesContext';

import { CardContainer, CardTitle, CardContentContainer, CardContent, CardTextContent, CardImageContent } from './styles';

const SERVER_URL_IMG = 'https://image.tmdb.org/t/p/w300/';

function Details() {
  const { handleFetchMovieDetails, movieDetails } = useMoviesContext();

  const location = useLocation();
  const movieId = new URLSearchParams(location.search).get('movie');

  useEffect(() => {
    handleFetchMovieDetails(movieId)
  }, [movieId])

  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <CardTitle>
            <span id='movie-title'>{movieDetails?.original_title}</span>
            <span id='movie-date'>{new Date(movieDetails?.release_date).toLocaleDateString()}</span>
          </CardTitle>
          <CardContentContainer>
            <CardContent>
              <CardTextContent>
                <h3>Sinopse</h3>
                <hr></hr>
                <p>{movieDetails?.overview}</p>
                <h3>Informações</h3>
                <hr></hr>
                <MovieGenreContainer>
                  {movieDetails?.genres.map((genreId) => {
                    return (
                      <MovieGenreComponent key={genreId}>
                        <span >
                          {genreId.name}
                        </span>
                      </MovieGenreComponent>
                    )
                  })}
                </MovieGenreContainer>
              </CardTextContent>
              <CardImageContent>
                <img
                  src={`${SERVER_URL_IMG}${movieDetails?.poster_path}`}
                  alt={`Imagem do filme ${movieDetails?.title}`}
                />
              </CardImageContent>
            </CardContent>
          </CardContentContainer>
        </CardContainer>
      </Container>
    </>
  )
}

export default Details;