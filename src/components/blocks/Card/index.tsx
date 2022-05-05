import React from 'react';
import styled from "styled-components";

interface ICardProps {
  children: JSX.Element | JSX.Element[],
}

const StyledCard = styled.div`
  height: 100%;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 30px;
  transition: transform .3s ease-in;
  
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    transform: scale(1.01);
  }
  
  img {
    height: 250px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`

const Card: React.FC<ICardProps> = ({ children }) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  );
};

export default Card;