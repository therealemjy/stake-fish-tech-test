import { Response, Exchange, ApiExchange } from './types';
import formatResult from './utils/formatExchange';
import getFetchFunction from './utils/getFetchFunction';

export interface Params {
  resultsPerPage: number;
  page: number;
  isSSR?: boolean;
}

export type Output = Response<Exchange[]>;

export default async function getExchanges({
  resultsPerPage,
  page,
}: Params): Promise<Output> {
  const fetchFn = getFetchFunction();

  // Fetch exchanges from API
  const results = await fetchFn(
    `${process.env.GATSBY_COINGECKO_API_URL}/exchanges?per_page=${resultsPerPage}&page=${page}`
  );

  const formattedResults = await results.json();
  const output: Output = {};

  if (formattedResults.error) {
    output.error = 'An error occurred, please try again later.';
  } else {
    // Format results into exchanges
    const exchanges = (formattedResults as ApiExchange[]).map((result) =>
      formatResult(result)
    );

    output.data = exchanges;
  }

  return output;
}
