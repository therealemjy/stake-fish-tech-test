import styled from 'styled-components';

import Link from '../../components/Link';
import RoundLink from '../../components/RoundLink';
import Breakpoint from '../../constants/breakpoint';
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
  margin-right: ${BASE_SIZE * 2}px;
  flex: 0;

  @media (min-width: ${Breakpoint.desktop}px) {
    flex: initial;
  }
`;

export const HeadlineExchangeRank = styled.span`
  padding: ${BASE_SIZE / 2}px ${BASE_SIZE}px;
  border-radius: ${BASE_SIZE / 2}px;
  background-color: ${Palette.pigeonGrey};
  font-size: 1.25rem;
`;

export const Description = styled.p`
  margin-right: ${BASE_SIZE * 3}px;

  @media (min-width: ${Breakpoint.desktop}px) {
    flex: 1;
  }
`;

export const Content = styled.div`
  @media (min-width: ${Breakpoint.desktop}px) {
    display: flex;
  }
`;

export const InfoContainer = styled.div`
  @media (min-width: ${Breakpoint.desktop}px) {
    width: ${BASE_SIZE * 42}px;
  }
`;

export const DetailsContainer = styled.div`
  margin-bottom: ${BASE_SIZE * 3}px;
`;

export const Detail = styled.div`
  display: inline-block;
  margin-right: ${BASE_SIZE * 5}px;
`;

export const DetailLabel = styled.span`
  font-size: 0.875rem;
  color: ${Palette.toxicGreen};
`;

export const DetailText = styled.p`
  margin-bottom: 0;
  font-weight: 700;
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialLink = styled(RoundLink)`
  margin-right: ${BASE_SIZE * 2}px;
`;
