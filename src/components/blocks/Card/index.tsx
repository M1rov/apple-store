import React from 'react';
import styled from "styled-components";

interface ICardProps {
  children: JSX.Element | JSX.Element[],
}

const StyledCard = styled.div`
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 30px;
`

const Card: React.FC<ICardProps> = ({ children }) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  );
};

export default Card;