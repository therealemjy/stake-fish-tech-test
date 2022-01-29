export interface ApiIndividualExchangeResult {
  id: string;
  trust_score_rank: number;
  name: string;
  image: string;
  description?: string;
  year_established?: number;
  url?: string;
  country?: string;
  trust_score?: number;
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
