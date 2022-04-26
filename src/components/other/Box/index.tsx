import React from 'react';

interface IBox {
  sx?: Object,
}

interface IBoxProps extends IBox {
  children: JSX.Element | JSX.Element[] | string
}

const Box: React.FC<IBoxProps> = ({children, sx}) => {
  return (
    <div style={sx}>
      {children}
    </div>
  );
};

export default Box;