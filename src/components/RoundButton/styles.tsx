import styled from 'styled-components';

import BASE_SIZE from '../../constants/baseSize';
import * as ButtonStyles from '../Button/styles';

export const Container = styled(ButtonStyles.Container)`
  padding: 0;
  width: ${BASE_SIZE * 4}px;
  height: ${BASE_SIZE * 4}px;
  border-radius: ${BASE_SIZE * 2}px;
`;
