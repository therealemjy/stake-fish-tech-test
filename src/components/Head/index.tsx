import * as React from 'react';

import ResetStyle from '../../styles/ResetStyle';
import GlobalStyles from '../../styles/GlobalStyle';

const Head: React.FC = () => (
  <>
    <ResetStyle />
    <GlobalStyles />

    {/* TODO: add SEO */}
  </>
);

export default Head;
