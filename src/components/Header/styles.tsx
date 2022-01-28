import styled from 'styled-components';
import { Link } from 'gatsby';

import Palette from '../../constants/palette';
import BASE_SIZE from '../../constants/baseSize';
import Wrapper from '../Wrapper';

export const Container = styled(Wrapper)`
  margin-bottom: ${BASE_SIZE * 4}px;
  height: ${BASE_SIZE * 8}px;
  display: flex;
  align-items: center;
`;

export const Logo = styled(Link)`
  text-transform: uppercase;
  font-weight: 600;
  color: inherit;
  text-decoration: none;
  padding: ${BASE_SIZE * 2}px; // Add padding to the logo to expand the hit box
  margin-left: -${BASE_SIZE * 2}px; // Compensate for the left padding

  span {
    color: ${Palette.toxicGreen};
  }
`;
