import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieGenreComponent from '../movieGenreComponent';
import MovieGenreContainer from '../movieGenreContainer';
import useMoviesContext from '../../hooks/useMoviesContext';
import { CardPercentageInfo, CardPercentageInfoContainer, CardBottomUpperInfo, CardBottomLowInfo, CardContainer, Card, CardImage, CardContentContainer, CardTopContent, CardBottomContent } from './styles';

const SERVER_URL_IMG = 'https://image.tmdb.org/t/p/w200/';

function CardList({ movie }) {
  const { genres } = useMoviesContext();
  const navigation = useNavigate();

  if (!movie) {
    return null;
  }

  return (
    <CardContainer role='button' onClick={() => navigation(`/details?movie=${movie.id}`)} >
      <Card>
        <CardImage
          src={`${SERVER_URL_IMG}${movie?.poster_path}`}
          alt={`Image for the movie ${movie?.title}`}
          loading="lazy"
        />
        <CardContentContainer>
          <CardTopContent>
            <h2>{movie?.title}</h2>
          </CardTopContent>
          <CardBottomContent>
            <CardBottomUpperInfo>
              <CardPercentageInfoContainer>
                <CardPercentageInfo>
                  <span>{movie?.vote_average * 10}%</span>
                </CardPercentageInfo>
              </CardPercentageInfoContainer>
              <div style={{ paddingLeft: '50px' }}>
                <span>{new Date(movie?.release_date).toLocaleDateString()}</span>
              </div>
            </CardBottomUpperInfo>
            <CardBottomLowInfo>
              <p>{movie?.overview}</p>
              <MovieGenreContainer>
                {movie?.genre_ids.map((genreId) => {
                  return (
                    <MovieGenreComponent key={genreId}>
                      <span >
                        {genres[genreId]}
                      </span>
                    </MovieGenreComponent>
                  )
                })}
              </MovieGenreContainer>
            </CardBottomLowInfo>
          </CardBottomContent>
        </CardContentContainer>
      </Card>
    </CardContainer>
  )
}

export default CardList;