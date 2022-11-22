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
  reviews?: {
    rate: number;
    feedback: string;
    reviewer: {
      profile_picture?: {
        file: string;
      };
      first_name: string;
      created_at: string;
    };
  }[];
}

export const useRates = () => {
  return useQuery(`rates`, () =>
    request.get<RatesResponse>(`driver/rate/detail/`).then((res) => res.data)
  );
};
