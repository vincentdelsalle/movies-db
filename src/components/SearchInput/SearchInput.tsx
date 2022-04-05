import React from 'react';
import styled from 'styled-components';
import closeButton from '../../assets/img/close-button.png';

export interface SearchInputProps {
  placeholder: string;
  searchContent: string;
  handleChange: (e: any) => void;
  handleSearch: () => void;
  clearInput: () => void;
}

const Wrapper = styled.div`
  margin: 20px 32px 0;
  border: 1px solid lightgrey;
  display: flex;
  place-content: space-between;
  padding: 10px;
`;

const InputText = styled.input`
  border: none;
  width: 100%;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  searchContent,
  handleChange,
  handleSearch,
  clearInput,
}) => (
  <Wrapper>
    <InputText
      type="text"
      placeholder={placeholder}
      value={searchContent}
      onChange={(e) => handleChange(e)}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          handleSearch();
        }
      }}
      className="search-input"
    />
    <img
      src={closeButton}
      alt="close-btn"
      style={{
        height: '20px',
        width: 'auto',
        cursor: 'pointer',
      }}
      onClick={clearInput}
    />
  </Wrapper>
);
