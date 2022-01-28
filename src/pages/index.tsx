import * as React from 'react';

import Head from '../components/Head';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';
import ExchangeList from '../components/ExchangeList';

// TODO: fetch actual data using API
const exchanges = [
  {
    rank: 1,
    name: 'Binance',
    country: 'Cayman Islands',
    url: 'https://www.binance.com/',
    logoUri:
      'https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250',
  },
  {
    rank: 2,
    name: 'OKX',
    country: 'Belize',
    url: 'https://www.okx.com',
    logoUri:
      'https://assets.coingecko.com/markets/images/96/small/WeChat_Image_20220117220452.png?1642428377',
  },
  {
    rank: 3,
    name: 'Coinbase Exchange',
    country: 'United States',
    url: 'https://www.coinbase.com',
    logoUri:
      'https://assets.coingecko.com/markets/images/23/small/Coinbase_Coin_Primary.png?1621471875',
  },
  {
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

    <main>
      <Header />

      <Wrapper>
        <h1>Exchanges</h1>

        <ExchangeList exchanges={exchanges} />
      </Wrapper>
    </main>
  </>
);

export default HomePage;
