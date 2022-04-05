import React from 'react';
import styled from 'styled-components';
import { Skeleton } from '../../components/Skeleton';
import { PosterImage } from '../PosterImg';

const ListingWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 2rem;
  gap: 1rem;
`;

const MoviePoster = styled.div`
  flex-basis: 180px;
  cursor: pointer;
`;

export interface MoviesListingProps {
  loading?: boolean;
  movies: any[];
  posterBaseUrl: string;
  goToMovieDetails: (id: number) => void;
}

export const MoviesListing: React.FC<MoviesListingProps> = ({
  loading = true,
  movies,
  posterBaseUrl,
  goToMovieDetails,
}) => (
  <ListingWrapper>
    {loading ? (
      <>
        {Array.from({ length: 20 }).map((_, key) => (
          <Skeleton key={key} height="270px" width="180px" />
        ))}
      </>
    ) : (
      <>
        {movies.length === 0 && <h3>No movies for that request</h3>}
        {movies.map((movie: any) => (
          <MoviePoster
            key={movie.id}
            onClick={() => goToMovieDetails(movie.id)}
          >
            <PosterImage
              posterImgUrl={`${posterBaseUrl}${movie.poster_path}`}
              posterMovieTitle={movie.title}
            />
          </MoviePoster>
        ))}
      </>
    )}
  </ListingWrapper>
);
