import { request } from '../api';
import { useQuery } from 'react-query';

interface RatesResponse {
  average_rate: number;
  rate_one: number;
  rate_two: number;
  rate_three: number;
  rate_four: number;
  rate_five: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  feedbacks: any[];
}

export const useRates = () => {
  return useQuery(`rates`, () =>
    request.get<RatesResponse>(`driver/rate/detail/`).then((res) => res.data)
  );
};
