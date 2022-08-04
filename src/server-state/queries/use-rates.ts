import { request } from '../api';
import { useQuery } from 'react-query';
import { useAuth } from 'global-state/auth/auth.state';

interface RatesResponse {
  average_rate: number;
  rate_one: number;
  rate_two: number;
  rate_three: number;
  rate_four: number;
  rate_five: number;
  feedbacks: any[];
}

export const useRates = () => {
  const { userId } = useAuth();
  return useQuery(`rates`, () =>
    request
      .get<RatesResponse>(`driver/rate/${userId}/detail/`)
      .then((res) => res.data)
  );
};
