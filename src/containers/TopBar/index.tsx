import React from 'react';
import styled from 'styled-components';
import { ThemeToggleBtn } from '../../components/Buttons/ThemeToggleBtn';
import { useLocation, useNavigate } from 'react-router-dom';

import backButton from '../../assets/img/back-button.png';
import { BackButton } from '../../components/Buttons/BackButton';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 40%;
  padding: 10px 0;
`;

const Title = styled.h1`
  grid-column-start: 2;
  text-align: center;
`;

const ThemeToggleWrapper = styled.div`
  grid-column-start: 3;
  align-self: center;
  justify-self: end;
  margin-right: 1rem;
`;

const BackBtnWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TopBar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate('/');
  };

  return (
    <Wrapper className="top-bar">
      {location.pathname.includes('/movie-details') && (
        <BackBtnWrapper>
          <BackButton backBtnImg={backButton} onNavigate={onNavigate} />
        </BackBtnWrapper>
      )}
      <Title>Movies</Title>
      <ThemeToggleWrapper>
        <ThemeToggleBtn />
      </ThemeToggleWrapper>
    </Wrapper>
  );
};
