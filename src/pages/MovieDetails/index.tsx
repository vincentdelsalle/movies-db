import React from 'react';
import styled from 'styled-components';

import { MovieDetails } from '../../components/MovieDetails';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useMovieDetailsData } from './useMovieDetailsData';

const Wrapper = styled.div<{ isLarge?: boolean }>`
  width: ${({ isLarge }) => (isLarge ? '1080px' : '100%')};
  margin: 0 auto;
`;

export const MovieDetailsPage: React.FC = () => {
  const isMobile = useMediaQuery('mobile');
  const isLarge = useMediaQuery('large');

  const { loading, movieDetails, errorMessage } = useMovieDetailsData();

  return (
    <Wrapper isLarge={isLarge}>
      {errorMessage || (
        <MovieDetails loading={loading} isMobile={isMobile} {...movieDetails} />
      )}
    </Wrapper>
  );
};
