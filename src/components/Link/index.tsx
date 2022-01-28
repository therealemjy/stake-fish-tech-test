import { GatsbyLinkProps } from 'gatsby';

import * as Styles from './styles';

export interface ButtonProps
  extends Omit<GatsbyLinkProps<Record<string, unknown>>, 'ref'> {
  label: string;
}

const Link: React.FC<ButtonProps> = ({ label, ...linkProps }) => (
  <Styles.Container {...linkProps}>{label}</Styles.Container>
);

export default Link;
