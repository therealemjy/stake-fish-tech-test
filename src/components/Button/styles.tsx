import styled from 'styled-components';

import Palette from '../../constants/palette';
import BASE_SIZE from '../../constants/baseSize';

export const Container = styled.button`
  background-color: ${Palette.toxicGreen};
  color: ${Palette.black};
  font-weight: 700;
  line-height: 1;
  border: 0;
  padding: ${BASE_SIZE * 2}px ${BASE_SIZE * 4}px;
  cursor: pointer;

  :disabled {
    background-color: ${Palette.asphaltGrey};
  }
`;
