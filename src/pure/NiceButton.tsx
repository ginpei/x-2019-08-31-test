import React from 'react';
import styled from 'styled-components';

type Props = React.ComponentPropsWithRef<'button'>;

const NiceButtonElement = styled.button`
  background-color: blue;
`;

const NiceButton: React.FC<Props> = (props) => {
  const { className, type = 'button', ...restProps } = props;

  return (
    <NiceButtonElement
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...restProps}
      className={`NiceButton ${className}`}
      type={type}
    />
  );
};

export default NiceButton;
