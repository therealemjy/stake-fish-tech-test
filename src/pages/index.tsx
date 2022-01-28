import * as React from 'react';

import Head from '../components/Head';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';

const HomePage = () => (
  <>
    <Head />

    <main>
      <Header />

      <Wrapper>
        <h1>Exchanges</h1>
      </Wrapper>
    </main>
  </>
);

export default HomePage;
