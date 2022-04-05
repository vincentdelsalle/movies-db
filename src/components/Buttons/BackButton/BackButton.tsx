import styled from 'styled-components';

interface BackButtonProps {
  backBtnImg: string;
  onNavigate: () => void;
}

const BackBtnImg = styled.img`
  height: 30px;
  width: auto;
  cursor: pointer;
  margin-left: 1rem;
`;

export const BackButton: React.FC<BackButtonProps> = ({
  backBtnImg,
  onNavigate,
}) => {
  return <BackBtnImg src={backBtnImg} alt="back-button" onClick={onNavigate} />;
};
