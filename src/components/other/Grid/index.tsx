import React from 'react';
import styled from "styled-components";

interface IGrid {
  columns?: number,
  gap?: number
  margin?: string,
  marginTop?: number,
  marginBottom?: number,
  marginRight?: number,
  marginLeft?: number,
}

interface IGridProps extends IGrid {
  children: React.ReactNode,
}

const StyledGrid = styled.div<IGrid>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  gap: ${({ gap }) => gap}px;
  margin: ${({ margin }) => margin};
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  margin-right: ${({ marginRight }) => marginRight}px;
`

const Grid: React.FC<IGridProps> = ({children, ...props}) => {
  return (
    <StyledGrid {...props}>
      {children}
    </StyledGrid>
  );
};

export default Grid;