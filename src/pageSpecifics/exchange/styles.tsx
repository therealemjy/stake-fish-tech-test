import styled from 'styled-components';

import Link from '../../components/Link';
import BASE_SIZE from '../../constants/baseSize';
import Palette from '../../constants/palette';

export const BackLink = styled(Link).attrs({
  iconName: 'arrow-left',
})`
  margin-bottom: ${BASE_SIZE * 4}px;
`;

export const Headline = styled.div`
  margin: 0 auto ${BASE_SIZE * 3}px;
  text-align: center;
`;

export const HeadlineImage = styled.img`
  width: ${BASE_SIZE * 6}px;
  height: ${BASE_SIZE * 6}px;
  margin: 0 auto ${BASE_SIZE}px;
`;

export const HeadlineExchange = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeadlineExchangeName = styled.h1`
  margin-bottom: 0;
  display: inline-block;
  margin-right: ${BASE_SIZE * 2}px;
`;

export const HeadlineExchangeRank = styled.span`
  padding: ${BASE_SIZE / 2}px ${BASE_SIZE}px;
  border-radius: ${BASE_SIZE / 2}px;
  background-color: ${Palette.pigeonGrey};
  font-size: 1.25rem;
`;
