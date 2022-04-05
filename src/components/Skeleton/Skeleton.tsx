import styled from 'styled-components';

import React, { HTMLAttributes } from 'react';

const SkeletonShape = styled.div<SkeletonProps>`
  color: transparent;
  cursor: progress;
  user-select: none;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  background: lightgrey;
  animation-direction: alternate;
  animation-duration: 500ms;
  animation-iteration-count: infinite;
  animation-name: skeleton--pulse;
  @keyframes skeleton--pulse {
    0% {
      opacity: 0.85;
    }
    100% {
      opacity: 0.55;
    }
  }
`;
export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  children,
  ...props
}) => {
  return (
    <SkeletonShape width={width} height={height} {...props}>
      {children}
    </SkeletonShape>
  );
};
