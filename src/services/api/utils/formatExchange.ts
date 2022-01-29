import { Exchange, ApiExchange } from '../types';

const formatExchange = (data: ApiExchange): Exchange => ({
  id: data.id,
  rank: data.trust_score_rank,
  name: data.name,
  country: data.country,
  url: data.url,
  logoUri: data.image,
  yearEstablished: data.year_established,
  facebookUrl: data.facebook_url,
  telegramUrl: data.telegram_url,
  slackUrl: data.slack_url,
  redditUrl: data.reddit_url,
  twitterHandle: data.twitter_handle,
});

export default formatExchange;
