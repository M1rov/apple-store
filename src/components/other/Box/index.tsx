import React from 'react';

interface IBox {
  sx?: Object,
  className?: string
}

interface IBoxProps extends IBox {
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