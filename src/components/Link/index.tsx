import * as React from 'react';
import { GatsbyLinkProps } from 'gatsby';

import { IconName } from '../Icon';
import * as Styles from './styles';

export interface LinkProps
  extends Omit<GatsbyLinkProps<Record<string, unknown>>, 'ref'> {
  label: string;
  iconName?: IconName;
}

const Link: React.FC<LinkProps> = ({ label, iconName, ...linkProps }) => (
  <Styles.Container {...linkProps}>
    {!!iconName && <Styles.Icon name={iconName} />}

    <span>{label}</span>
  </Styles.Container>
);

export default Link;
