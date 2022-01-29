import styled from 'styled-components';

import Link from '../../components/Link';
import BASE_SIZE from '../../constants/baseSize';

export const BackLink = styled(Link).attrs({
  iconName: 'arrow-left',
})`
  margin-bottom: ${BASE_SIZE * 4}px;
`;
