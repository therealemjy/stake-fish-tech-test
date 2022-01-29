import * as React from 'react';
import { PageProps } from 'gatsby';

import { Exchange } from '../services/api';
import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import * as Styles from '../pageSpecifics/exchange/styles';

interface ServerData {
  data?: Exchange;
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
            <Styles.BackLink to="/" label="Go back" />

            <Styles.Headline>
              <Styles.HeadlineImage
                src={serverData.data?.logoUri}
                alt={`Logo of ${serverData.data?.name || 'exchange'}`}
              />

              <Styles.HeadlineExchange>
                <Styles.HeadlineExchangeName>
                  {serverData.data?.name}
                </Styles.HeadlineExchangeName>

                <Styles.HeadlineExchangeRank>
                  #{serverData.data?.rank}
                </Styles.HeadlineExchangeRank>
              </Styles.HeadlineExchange>
            </Styles.Headline>
          </>
        )}
      </Wrapper>
    </main>

    <Footer />
  </>
);

export default ExchangePage;

export async function getServerData() {
  const serverData: ServerData = {
    // TODO: fetch exchange from API
    data: {
      id: 'binance',
      rank: 1,
      name: 'Binance',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      country: 'Cayman Islands',
      url: 'https://www.binance.com/',
      logoUri:
        'https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250',
      yearEstablished: 2018,
      facebookUrl: 'https://www.binance.com/',
      redditUrl: 'https://www.binance.com/',
      slackUrl: 'https://www.binance.com/',
      telegramUrl: 'https://www.binance.com/',
      twitterHandle: '@the_real_emjy',
    },
  };

  return {
    status: 200,
    props: serverData,
    headers: {},
  };
}
