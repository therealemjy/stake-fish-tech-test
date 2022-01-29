import { Exchange, ApiIndividualExchangeResult } from '../types';

const formatExchange = (data: ApiIndividualExchangeResult): Exchange => ({
  id: data.id,
  rank: data.trust_score_rank,
  name: data.name,
  country: data.country,
  url: data.url,
  logoUri: data.image,
});

export default formatExchange;
