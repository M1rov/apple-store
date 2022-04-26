import React from 'react';
import styled, {useTheme} from "styled-components";
import Typography from "../../other/Typography";

interface ISectionProps {
  title: string,
  children: JSX.Element | JSX.Element[] | string,

}

const StyledSection = styled.section`

`

const Section: React.FC<ISectionProps> = ({title, children, ...props}) => {
  const theme = useTheme();

  return (
    <StyledSection>
      <Typography component="h3" color={theme.colors.secondary}>
        {title}
      </Typography>
      {children}
    </StyledSection>
  );
};

export default Section;