import React from 'react';
import styled from "styled-components";

interface IBadge {
  content: string|number,
  color?: string,
}

interface IBadgeProps extends IBadge{
  children: JSX.Element,

}

const StyledBadge = styled.div<IBadge>`
  display: inline-block;
  position: relative;
  
  &::after {
    content: '${({ content }) => content}';
    position: absolute;
    top: -8px;
    right: -8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ color, theme }) => color || theme.colors.primary};
    color: white;
    font-size: 15px;
    font-weight: 500;
  }
`

const Badge: React.FC<IBadgeProps> = ({children, ...props}) => {
  return (
    <StyledBadge {...props}>
      {children}
    </StyledBadge>
  );
};

export default Badge;