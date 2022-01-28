import styled from 'styled-components';
import { Link } from 'gatsby';

import BASE_SIZE from '../../constants/baseSize';
import OriginalIcon from '../Icon';

export const Container = styled(Link)`
  display: inline-flex;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  color: inherit;
  text-decoration: none;
`;

export const Icon = styled(OriginalIcon)`
  margin-right: ${BASE_SIZE}px;
`;
