import styled from 'styled-components';
import { Link } from 'gatsby';

import Button from '../Button';
import BASE_SIZE from '../../constants/baseSize';

export const TableContainer = styled.div`
  overflow-x: auto;
  margin-bottom: ${BASE_SIZE * 4}px;
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

export const LoadMoreButton = styled(Button)`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
