import { GatsbyLinkProps } from 'gatsby';

import { IconName } from '../Icon';

import * as Styles from './styles';

export interface ButtonProps
  extends Omit<GatsbyLinkProps<Record<string, unknown>>, 'ref'> {
  label: string;
  iconName?: IconName;
}

const Link: React.FC<ButtonProps> = ({ label, iconName, ...linkProps }) => (
  <Styles.Container {...linkProps}>
    {!!iconName && <Styles.Icon name={iconName} />}

    <span>{label}</span>
  </Styles.Container>
);

export default Link;
