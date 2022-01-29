import styled from 'styled-components';

import Breakpoint from '../../constants/Breakpoint';
import BASE_SIZE from '../../constants/baseSize';

export const Container = styled.div`
  padding-left: ${BASE_SIZE * 3}px;
  padding-right: ${BASE_SIZE * 3}px;

  @media (min-width: ${Breakpoint.tablet}px) {
    max-width: ${BASE_SIZE * 100}px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: ${Breakpoint.desktop}px) {
    max-width: ${BASE_SIZE * 125}px;
  }
`;
