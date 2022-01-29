import * as React from 'react';
import { Helmet } from 'react-helmet';

import ResetStyle from '../../styles/ResetStyle';
import GlobalStyles from '../../styles/GlobalStyle';

export interface HeadProps {
  title: string;
  description: string;
}

const Head: React.FC<HeadProps> = ({ title, description }) => (
  <>
    <ResetStyle />
    <GlobalStyles />

    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* TODO: add other tags for SEO purposes */}
    </Helmet>
  </>
);

export default Head;
