import styled from 'styled-components';

import Palette from '../../constants/palette';
import BASE_SIZE from '../../constants/baseSize';

export const Container = styled.a`
  display: block;
  padding: 0;
  width: ${BASE_SIZE * 5}px;
  height: ${BASE_SIZE * 5}px;
  border-radius: ${BASE_SIZE * 3}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Palette.toxicGreen};
`;
