import * as Styles from './styles';

import BASE_SIZE from '../../constants/baseSize';
import Palette from '../../constants/palette';
import Icon, { IconName } from '../Icon';

export interface RoundButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: IconName;
}

const RoundButton: React.FC<RoundButtonProps> = ({
  iconName,
  ...buttonProps
}) => (
  <Styles.Container {...buttonProps}>
    <Icon name={iconName} color={Palette.black} size={BASE_SIZE * 2} />
  </Styles.Container>
);

export default RoundButton;
