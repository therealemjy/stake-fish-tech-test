import * as React from 'react';

import * as Styles from './styles';

export type FooterProps = React.HTMLAttributes<HTMLDivElement>;

const Footer: React.FC<FooterProps> = ({ children, ...containerProps }) => (
  <Styles.Container {...containerProps}>
    {/* TODO: add info */}
  </Styles.Container>
);

export default Footer;
