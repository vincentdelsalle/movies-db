import React from 'react';
import styled from 'styled-components';
import { MoviesListing } from '../../components/MoviesListing';
import { SearchInput } from '../../components/SearchInput';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useHomeData } from './useHomeData';

const Wrapper = styled.div<{ isLarge?: boolean }>`
  width: ${({ isLarge }) => (isLarge ? '1080px' : '100%')};
  margin: 0 auto;
`;

export const Home: React.FC = () => {
  const isLarge = useMediaQuery('large');
  const { loading, searchInput, movieListing, errorMessage } = useHomeData();

  return (
    <Wrapper isLarge={isLarge}>
      {errorMessage || (
        <>
          <SearchInput {...searchInput} />
          <MoviesListing loading={loading} {...movieListing} />
        </>
      )}
    </Wrapper>
  );
};
