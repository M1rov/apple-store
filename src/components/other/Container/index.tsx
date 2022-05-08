import React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1140px;
  padding: 0 20px;
  margin: 0 auto;
`

interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
};

export default Container;