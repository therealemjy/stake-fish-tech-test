import * as React from 'react';

import * as Styles from './styles';

export interface Exchange {
  id: number;
  rank: number;
  name: string;
  url: string;
  logoUri: string;
  country: string;
}

export interface ExchangeListProps
  extends React.HTMLAttributes<HTMLDivElement> {
  exchanges: Exchange[];
}

const ExchangeList: React.FC<ExchangeListProps> = ({
  exchanges,
  ...containerProps
}) => (
  <Styles.Container {...containerProps}>
    <table>
      <tr>
        <Styles.RankCell>#</Styles.RankCell>
        <Styles.ExchangeCell>Exchange</Styles.ExchangeCell>
        <Styles.CountryCell>Country</Styles.CountryCell>
        <Styles.UrlCell>URL</Styles.UrlCell>
      </tr>

      {exchanges.map((exchange) => (
        <tr>
          <td>{exchange.rank}</td>

          <td>
            <Styles.ExchangeLink to={`/exchange/${exchange.id}`}>
              <Styles.ExchangeLinkLogo
                src={exchange.logoUri}
                alt={`Logo of ${exchange.name}`}
              />

              <span>{exchange.name}</span>
            </Styles.ExchangeLink>
          </td>

          <td>{exchange.country}</td>

          <td>
            <a
              href={exchange.url}
              aria-label={`Visit the website of ${exchange.name}`}
            >
              {exchange.url}
            </a>
          </td>
        </tr>
      ))}
    </table>
  </Styles.Container>
);

export default ExchangeList;
