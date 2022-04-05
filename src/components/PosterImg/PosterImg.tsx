import React from 'react';
import styled from 'styled-components';

interface PosterImgProps {
  posterImgUrl: string;
  posterMovieTitle: string;
}

const PosterImg = styled.img`
  width: 100%;
  max-width: 300px;
  align-self: center;
`;

export const PosterImage: React.FC<PosterImgProps> = ({
  posterImgUrl,
  posterMovieTitle,
}) => <PosterImg src={posterImgUrl} alt={posterMovieTitle} />;
