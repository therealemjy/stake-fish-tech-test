import * as React from 'react';

import * as Styles from './styles';

export type WrapperProps = React.HTMLAttributes<HTMLDivElement>;

const Header: React.FC<WrapperProps> = ({ children, ...containerProps }) => (
  <Styles.Container {...containerProps}>
    <Styles.Logo to="/" aria-label="Go to home page">
      Make<span>it</span>rain
    </Styles.Logo>
  </Styles.Container>
);

export default Header;
