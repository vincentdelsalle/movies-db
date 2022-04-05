import React from 'react';
import styled from 'styled-components';
import { PosterImage } from '../PosterImg';
import { Skeleton } from '../Skeleton';

export interface MovieDetailsProps {
  loading?: boolean;
  isMobile?: boolean;
  details: {
    title: string;
    overview: string;
    voteAverage: number;
    posterPath: string;
  };
}

const Wrapper = styled.div<Pick<MovieDetailsProps, 'isMobile'>>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  gap: 2rem;
  margin: 3rem;
`;
const Description = styled.div<Pick<MovieDetailsProps, 'loading'>>`
  display: flex;
  flex-direction: column;
  text-align: start;
  flex-grow: ${({ loading }) => (loading ? '1' : undefined)};
`;

export const MovieDetails: React.FC<MovieDetailsProps> = ({
  loading = true,
  isMobile = false,
  details,
}) => (
  <>
    {loading ? (
      <Wrapper isMobile={isMobile}>
        <Description loading>
          <Skeleton
            width={isMobile ? '100%' : '50%'}
            height={isMobile ? '54px' : '28px'}
            style={{ margin: '20px 0' }}
          />
          <Skeleton
            width="100%"
            height={isMobile ? '150px' : '57px'}
            style={{ margin: '16px 0' }}
          />
          <Skeleton width="70px" height="19px" />
        </Description>
        <Skeleton
          width={isMobile ? '100%' : '300px'}
          height={isMobile ? '420px' : '450px'}
          style={{
            maxWidth: isMobile ? '300px' : undefined,
            alignSelf: 'center',
          }}
        />
      </Wrapper>
    ) : (
      <Wrapper isMobile={isMobile}>
        <Description loading>
          <h2>{details.title}</h2>
          <p>{details.overview}</p>
          <span>{details.voteAverage} / 10</span>
        </Description>
        <PosterImage
          posterImgUrl={details.posterPath}
          posterMovieTitle={details.title}
        />
      </Wrapper>
    )}
  </>
);
