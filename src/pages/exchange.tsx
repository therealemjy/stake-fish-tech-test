import * as React from 'react';
import { PageProps } from 'gatsby';

import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';

interface ServerData {
  error?: string;
}

export interface ExchangePageProps
  extends PageProps<unknown, unknown, unknown, ServerData> {}

const ExchangePage: React.FC<ExchangePageProps> = ({ serverData }) => (
  <>
    <Head />
    <Header />

    <main>
      <Wrapper>
        {!!serverData.error ? (
          <p>{serverData.error}</p>
        ) : (
          <>
            <h1>Exchange</h1>
          </>
        )}
      </Wrapper>
    </main>

    <Footer />
  </>
);

export default ExchangePage;

export async function getServerData() {
  // TODO: fetch exchange from API

  const serverData: ServerData = {};

  return {
    status: 200,
    props: serverData,
    headers: {},
  };
}
