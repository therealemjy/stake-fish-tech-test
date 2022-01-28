import * as React from 'react';

import Palette from '../../constants/palette';
import BASE_SIZE from '../../constants/baseSize';
import icons from './icons';

export type IconName = keyof typeof icons;

export interface IconProps {
  name: IconName;
  size?: number;
  color?: Palette;
}

const Icon: React.FC<IconProps> = ({
  name,
  color = Palette.white,
  size = BASE_SIZE * 3,
  ...props
}) => {
  const Component = icons[name];

  return <Component color={color} {...props} width={size} height={size} />;
};

export default Icon;
