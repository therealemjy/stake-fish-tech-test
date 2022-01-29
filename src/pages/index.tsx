import * as React from 'react';

import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import ExchangeList from '../components/ExchangeList';

// TODO: fetch actual data using API
const exchanges = [
  {
    id: 0,
    rank: 1,
    name: 'Binance',
    country: 'Cayman Islands',
    url: 'https://www.binance.com/',
    logoUri:
      'https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250',
  },
  {
    id: 1,
    rank: 2,
    name: 'OKX',
    country: 'Belize',
    url: 'https://www.okx.com',
    logoUri:
      'https://assets.coingecko.com/markets/images/96/small/WeChat_Image_20220117220452.png?1642428377',
  },
  {
    id: 2,
    rank: 3,
    name: 'Coinbase Exchange',
    country: 'United States',
    url: 'https://www.coinbase.com',
    logoUri:
      'https://assets.coingecko.com/markets/images/23/small/Coinbase_Coin_Primary.png?1621471875',
  },
  {
    id: 3,
    rank: 4,
    name: 'KuCoin',
    country: 'Seychelles',
    url: 'https://www.kucoin.com/',
    logoUri:
      'https://assets.coingecko.com/markets/images/61/small/kucoin.png?1640584259',
  },
];

const HomePage = () => (
  <>
    <Head />
    <Header />

    <main>
      <Wrapper>
        <h1>Exchanges</h1>

        <ExchangeList
          exchanges={exchanges}
          onLoadMore={() => {}}
          isLoadingMore={false}
        />
      </Wrapper>
    </main>

    <Footer />
  </>
);

export default HomePage;
