import React from 'react';
import styled from 'styled-components'

interface IFlex {
  direction?: 'row' | 'column',
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around',
  align?: 'flex-start' | 'center' | 'flex-end',
  wrap?: 'wrap' | 'no-wrap',
  flex?: string,
  margin?: string,
  marginTop?: number,
  marginBottom?: number,
  marginRight?: number,
  marginLeft?: number,
}

interface IFlexProps extends IFlex {
  children: JSX.Element|JSX.Element[]
}

const StyledFlex = styled.div<IFlex>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-wrap: ${({ wrap }) => wrap};
  flex: ${({ flex }) => flex}
  margin: ${({ margin }) => margin};
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  margin-right: ${({ marginRight }) => marginRight}px;
`

const Flex: React.FC<IFlexProps> = ({children, ...props}) => {
  return (
    <StyledFlex {...props}>
      {children}
    </StyledFlex>
  )
};

export default Flex;