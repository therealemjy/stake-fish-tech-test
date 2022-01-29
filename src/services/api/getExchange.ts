import { Response, Exchange, ApiExchange } from './types';
import formatExchange from './utils/formatExchange';

export interface Params {
  id: string;
  isSSR?: boolean;
}

export type Output = Response<Exchange>;

export default async function getExchange({
  id,
  isSSR = false,
}: Params): Promise<Output> {
  const fetchFn = isSSR ? fetch : window.fetch;

  // Fetch exchange from API
  const result = await fetchFn(
    `${process.env.GATSBY_COINGECKO_API_URL}/exchanges/${id}`
  );

  const formattedResult = await result.json();
  const output: Output = {};

  if (formattedResult.error) {
    output.error =
      // Note: this is quite fragile, as CoinGecko could change their error name
      // and so the default error message would always be be rendered, but
      // unfortunately they do not provide any error code of some sort that
      // we could use to identify the error
      formattedResult.error === 'exchange not found'
        ? 'Exchange not found'
        : 'An error occurred, please try again later.';
  } else {
    // Format result into exchange
    output.data = formatExchange(formattedResult as ApiExchange);
  }

  return output;
}
