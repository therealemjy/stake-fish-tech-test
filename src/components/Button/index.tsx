import * as React from 'react';

import * as Styles from './styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...buttonProps }) => (
  <Styles.Container type="button" {...buttonProps}>
    {label}
  </Styles.Container>
);

export default Button;
