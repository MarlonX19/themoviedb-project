import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Header, MovieGenreComponent, MovieGenreContainer } from '../../components'
import useMoviesContext from '../../hooks/useMoviesContext';

import { InformationComponent, InformationComponentContainer, CardContainer, CardTitle, CardContentContainer, CardContent, CardTextContent, CardImageContent } from './styles';

const SERVER_URL_IMG = 'https://image.tmdb.org/t/p/w300/';

function Details() {
  const { handleFetchMovieDetails, movieDetails } = useMoviesContext();
  console.log('===movieDetails', movieDetails)

  const location = useLocation();
  const movieId = new URLSearchParams(location.search).get('movie');

  useEffect(() => {
    handleFetchMovieDetails(movieId)
  }, [movieId])

  const generateLanguageName = (lang) => {
    if (lang) {
      return new Intl.DisplayNames(['pt'], { type: 'language' }).of(lang)
    }
    return '';
  }

  const statusObject = {
    Rumored: 'Não confirmado',
    Planned: 'Planejado',
    'In Production': 'Em produção',
    'Post Production': 'Pós produzido',
    Released: 'Lançado',
    Canceled: 'Cancelado'
  }

  const convertMinutes = (minutes) => {
    var h = Math.floor(minutes / 60);
    var m = minutes % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    return `${h}h ${m}m`;
  }

  let arr = [
    {
      title: 'Situação',
      value: statusObject[movieDetails?.status]
    },
    {
      title: 'Idioma',
      value: generateLanguageName(movieDetails?.original_language)
    },
    {
      title: 'Duração',
      value: convertMinutes(movieDetails?.runtime)
    },
    {
      title: 'Orçamento',
      value: `$${new Intl.NumberFormat().format(movieDetails?.budget)}`
    },
    {
      title: 'Receita',
      value: `$${new Intl.NumberFormat().format(movieDetails?.revenue)}`
    }
    ,
    {
      title: 'Lucro',
      value: `$${new Intl.NumberFormat().format(movieDetails?.revenue - movieDetails?.budget)}`
    }
  ]

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
                <InformationComponentContainer>
                  {
                    arr.map((v, i) => {
                      return (
                        <InformationComponent>
                          <h4>{v.title}</h4>
                          <span>
                            {v.value}
                          </span>
                        </InformationComponent>
                      )
                    })
                  }

                </InformationComponentContainer>
                <MovieGenreContainer>
                  {movieDetails?.genres?.map((genreId) => {
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