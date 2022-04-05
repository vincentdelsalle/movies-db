import styled from 'styled-components';

import { ChangeEventHandler } from 'react';

type themeColorType = 'light' | 'dark';

const setTheme = (color: themeColorType) => {
  localStorage.setItem('theme', color);
  document.documentElement.setAttribute('data-theme', color);
};

const storedTheme = localStorage.getItem('theme');

const prefersDark =
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const defaultDark =
  storedTheme === 'dark' || (storedTheme === null && prefersDark);

if (defaultDark) {
  setTheme('dark');
}

const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  setTheme(e.target.checked ? 'dark' : 'light');
};

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ToggleIcon = styled.span`
  font-size: 28px;
`;

const ToggleBtn = styled.label`
  position: relative;
  display: inline-block;
  height: 34px;
  width: 60px;

  input {
    display: none;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  input:checked + .slider {
    background-color: #60a5fa;
  }
`;

const Switch = styled.div`
  background-color: #1f2937;
  position: absolute;
  cursor: pointer;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  transition: 0.2s;
  border-radius: 34px;

  &:before {
    background-color: #fff;
    bottom: 4px;
    content: '';
    height: 26px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 26px;
    border-radius: 50%;
  }
`;

export const ThemeToggleBtn = () => {
  return (
    <ToggleWrapper>
      <ToggleIcon>☀️</ToggleIcon>
      <ToggleBtn className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <Switch className="slider"></Switch>
      </ToggleBtn>
      <ToggleIcon>🌒</ToggleIcon>
    </ToggleWrapper>
  );
};
