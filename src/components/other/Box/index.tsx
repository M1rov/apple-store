import React from 'react';

interface IBoxProps {
  sx?: React.CSSProperties,
  className?: string
  children: JSX.Element | JSX.Element[] | string
}

const Box: React.FC<IBoxProps> = ({children, className, sx}) => {
  return (
    <div style={sx} className={className}>
      {children}
    </div>
  );
};

export default Box;