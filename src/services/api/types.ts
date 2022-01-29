export interface ApiIndividualExchangeResult {
  id: string;
  name: string;
  country: string;
  image: string;
  trust_score_rank: number;
  description?: string;
  url?: string;
  year_established?: number;
  has_trading_incentive?: boolean;
  trust_score?: number;
  trade_volume_24h_btc?: number;
  trade_volume_24h_btc_normalized?: number;
}

export interface Exchange {
  id: string;
  rank: number;
  name: string;
  logoUri: string;
  description?: string;
  yearEstablished?: number;
  url?: string;
  country?: string;
  facebookUrl?: string;
  telegramUrl?: string;
  slackUrl?: string;
  redditUrl?: string;
  twitterHandle?: string;
}

export interface Response<T> {
  error?: string;
  data?: T;
}
