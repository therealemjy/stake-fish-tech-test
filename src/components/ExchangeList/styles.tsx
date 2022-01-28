import styled from 'styled-components';

import Palette from '../../constants/palette';
import BASE_SIZE from '../../constants/baseSize';

export const Container = styled.div`
  background-color: ${Palette.asphaltGrey};
  overflow-x: auto;
`;

export const RankCell = styled.th`
  min-width: ${BASE_SIZE * 4}px;
`;

export const ExchangeCell = styled.th`
  min-width: ${BASE_SIZE * 20}px;
`;

export const CountryCell = styled.th`
  min-width: ${BASE_SIZE * 20}px;
`;

export const UrlCell = styled.th`
  min-width: ${BASE_SIZE * 20}px;
`;
