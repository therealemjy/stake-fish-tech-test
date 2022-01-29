import * as React from 'react';
import { GatsbyLinkProps } from 'gatsby';

import BASE_SIZE from '../../constants/baseSize';
import Palette from '../../constants/palette';
import Icon, { IconName } from '../Icon';
import * as Styles from './styles';

export interface RoundLinkProps
  extends Omit<GatsbyLinkProps<Record<string, unknown>>, 'ref'> {
  iconName: IconName;
}

const RoundLink: React.FC<RoundLinkProps> = ({ iconName, ...buttonProps }) => (
  <Styles.Container {...buttonProps}>
    <Icon name={iconName} color={Palette.black} size={BASE_SIZE * 3} />
  </Styles.Container>
);

export default RoundLink;
