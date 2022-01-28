import styled from 'styled-components';
import { Link } from 'gatsby';

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
  min-width: ${BASE_SIZE * 25}px;
`;

export const CountryCell = styled.th`
  min-width: ${BASE_SIZE * 20}px;
`;

export const UrlCell = styled.th`
  min-width: ${BASE_SIZE * 20}px;
`;

export const ExchangeLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const ExchangeLinkLogo = styled.img`
  width: ${BASE_SIZE * 4}px;
  height: ${BASE_SIZE * 4}px;
  margin-right: ${BASE_SIZE * 2}px;
`;
