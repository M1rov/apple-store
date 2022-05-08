import React from 'react';
import styled, {useTheme} from "styled-components";
import Typography from "../../other/Typography";

interface ISection {
  margin?: string,
  marginTop?: number,
  marginBottom?: number,
  marginRight?: number,
  marginLeft?: number,
}

interface ISectionProps extends ISection {
  title: string,
  children: React.ReactNode,
  id?: string
}

const StyledSection = styled.section<ISection>`
  margin: ${({ margin }) => margin};
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  margin-right: ${({ marginRight }) => marginRight}px;
`

const Section: React.FC<ISectionProps> = ({title, children, id, ...props}) => {
  const theme = useTheme();

  return (
    <StyledSection {...props} id={id}>
      <Typography component="h3" color={theme.colors.secondary}>
        {title}
      </Typography>
      {children}
    </StyledSection>
  );
};

export default Section;