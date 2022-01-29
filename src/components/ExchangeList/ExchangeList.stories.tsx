import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ExchangeList from './index';

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

export default {
  title: 'ExchangeList',
  component: ExchangeList,
} as ComponentMeta<typeof ExchangeList>;

const Template: ComponentStory<typeof ExchangeList> = (args) => (
  <ExchangeList {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  exchanges,
  onLoadMore: () => {},
  isLoadingMore: false,
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  exchanges,
  onLoadMore: () => {},
  isLoadingMore: true,
};
