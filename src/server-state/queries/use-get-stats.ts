import { request } from '../api';
import { useQuery } from 'react-query';

interface StatsResponse {
  new: number;
  on_the_way: number;
  delivered: number;
  total_assigned_loads: number;
  all_bids_number: number;
  bids_rejected: number;
  bids_accepted: number;
  earned_amount_usd: number;
  earned_amount_rub: number;
  earned_amount_uzs: number;
}

export const useStats = () => {
  return useQuery(`stats`, () =>
    request.get<StatsResponse>(`driver/stat/detail/`).then((res) => res.data)
  );
};
