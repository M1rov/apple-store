import React from 'react';
import styled from "styled-components";

interface ITypography {
  weight?: 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
  color?: string,
}

interface ITypographyProps extends ITypography {
  children: React.ReactNode,
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span',
  className?: string,
  sx?: React.CSSProperties,
}

const StyledTypography = styled.div<ITypography>`
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
`

const Typography: React.FC<ITypographyProps> = ({children, component, className, sx, ...props}) => {
  return (
    <StyledTypography className={className} as={component || 'span'} {...props} style={sx}>
      {children}
    </StyledTypography>
  );
};

export default Typography;