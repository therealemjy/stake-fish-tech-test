import * as React from 'react';
import { PageProps } from 'gatsby';

import { Exchange } from '../types';
import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import ExchangeList from '../components/ExchangeList';

const RESULTS_PER_PAGE = 10;

interface ServerData {
  exchanges: Exchange[];
  error?: string;
}

interface Result {
  id: string;
  name: string;
  year_established: number;
  country: string;
  description: string;
  url: string;
  image: string;
  has_trading_incentive: boolean;
  trust_score: number;
  trust_score_rank: number;
  trade_volume_24h_btc: number;
  trade_volume_24h_btc_normalized: number;
}

const formatResult = (result: Result): Exchange => ({
  id: result.id,
  rank: result.trust_score_rank,
  name: result.name,
  country: result.country,
  url: result.url,
  logoUri: result.image,
});

export interface HomePageProps
  extends PageProps<unknown, unknown, unknown, ServerData> {}

const HomePage: React.FC<HomePageProps> = ({ serverData }) => (
  <>
    <Head />
    <Header />

    <main>
      <Wrapper>
        {!!serverData.error ? (
          <p>{serverData.error}</p>
        ) : (
          <>
            <h1>Exchanges</h1>

            <ExchangeList
              exchanges={serverData.exchanges}
              onLoadMore={() => {}}
              isLoadingMore={false}
            />
          </>
        )}
      </Wrapper>
    </main>

    <Footer />
  </>
);

export default HomePage;

// Note: because the blockchain world is subject to high volatility, we can not
// rely on data that is even just a week old to still be relevant. An exchange
// that's one day ranked number 4 and from a country that doesn't have any laws
// in place to cover cryptos, could tank the next day if that country were to
// announce they're banning cryptos altogether. For that reason, I've made the
// choice not to fetch the data necessary for the initial render of the home
// page at build time, but rather at run-time through server-side rendering. If
// this app were to receive a lot fo traffic and needed to scale, it could be
// optimized by putting server-side caching in place, so that the initial render
// of the home page would only be generated once every few hours rather than
// every time someone visits the website.
export async function getServerData() {
  if (!process.env.GATSBY_COINGECKO_API_URL) {
    throw new Error('Environment variable missing: GATSBY_COINGECKO_API_URL');
  }

  const serverData: ServerData = { exchanges: [] };

  // Fetch exchanges from API
  const result = await fetch(
    `${process.env.GATSBY_COINGECKO_API_URL}?per_page=${RESULTS_PER_PAGE}&page=0`
  );

  const formattedResult = await result.json();

  if (formattedResult.error) {
    serverData.error = 'An error occurred, please try again later.';
  } else {
    // Format results into exchanges
    const exchanges = (formattedResult as Result[]).map((result) =>
      formatResult(result)
    );

    serverData.exchanges = exchanges;
  }

  return {
    status: 200,
    props: serverData,
  };
}
