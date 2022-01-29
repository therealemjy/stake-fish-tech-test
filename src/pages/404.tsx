import * as React from 'react';

import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import Link from '../components/Link';

const NotFoundPage = () => (
  <>
    <Head />
    <Header />

    <main>
      <Wrapper>
        <h1>Not found</h1>

        <p>We could not find the page you are looking for 😔</p>

        <Link to="/" label="Go back to home page" />
      </Wrapper>
    </main>

    <Footer />
  </>
);

export default NotFoundPage;
