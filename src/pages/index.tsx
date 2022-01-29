import * as React from 'react';
import { PageProps, GetServerData } from 'gatsby';

import apiService, { Exchange } from '../services/api';
import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import ExchangeList from '../components/ExchangeList';

const RESULTS_PER_PAGE = 10;

interface ServerData {
  data?: Exchange[];
  error?: string;
}

export interface HomePageProps
  extends PageProps<unknown, unknown, unknown, ServerData> {}

const HomePage: React.FC<HomePageProps> = ({ serverData }) => {
  const [exchanges, setExchanges] = React.useState(serverData.data || []);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isLoadingMore, setIsLoadingMore] = React.useState(false);

  const loadMore = async () => {
    setIsLoadingMore(true);

    // Fetch exchanges from API
    const result = await apiService.getExchanges({
      resultsPerPage: RESULTS_PER_PAGE,
      page: currentPage + 1,
    });

    if (result.error) {
      // TODO: more elegant error handling
      alert(result.error);
    } else {
      // Add exchanges to the list
      setExchanges((existingExchanges) =>
        existingExchanges.concat(result.data || [])
      );

      // Update page number
      setCurrentPage((existingCurrentPage) => existingCurrentPage + 1);

      // TODO: detect when end of list is reached. CoinGecko's API doesn't provide
      // any information on that.
    }

    setIsLoadingMore(false);
  };

  return (
    <>
      <Head
        title="MakeItRain"
        description="List of cryptocurrency trading exchanges, ranked by score of trust."
      />
      <Header />

      <main>
        <Wrapper>
          {!!serverData.error ? (
            <p>{serverData.error}</p>
          ) : (
            <>
              <h1>Exchanges</h1>

              <ExchangeList
                exchanges={exchanges}
                onLoadMore={loadMore}
                isLoadingMore={isLoadingMore}
              />
            </>
          )}
        </Wrapper>
      </main>

      <Footer />
    </>
  );
};

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
export const getServerData: GetServerData<ServerData> = async () => {
  if (!process.env.GATSBY_COINGECKO_API_URL) {
    throw new Error('Environment variable missing: GATSBY_COINGECKO_API_URL');
  }

  // Fetch exchanges from API
  const serverData = await apiService.getExchanges({
    resultsPerPage: RESULTS_PER_PAGE,
    page: 0,
  });

  return {
    status: 200,
    props: serverData,
  };
};
