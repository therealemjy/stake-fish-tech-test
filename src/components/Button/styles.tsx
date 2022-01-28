import styled, { css } from 'styled-components';

import COLORS from '../../constants/colors';
import BASE_SIZE from '../../constants/baseSize';

export const ButtonStyle = css`
  font-weight: 700;
  line-height: 1;
  background-color: ${COLORS.toxicGreen};
  border: 0;
  color: ${COLORS.black};

  :disabled {
    background-color: ${COLORS.asphaltGrey};
  }
`;

export const Container = styled.button`
  ${ButtonStyle};

  padding: ${BASE_SIZE * 2}px ${BASE_SIZE * 4}px;
  cursor: pointer;

  :disabled {
    background-color: ${COLORS.asphaltGrey};
  }
`;
