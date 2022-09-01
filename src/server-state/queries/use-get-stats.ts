import { request } from '../api';
import { useQuery } from 'react-query';

export interface ChartResponse {
  delivered_jan_count: number;
  on_the_way_jan_count: number;
  new_jan_count: number;
  delivered_feb_count: number;
  on_the_way_feb_count: number;
  new_feb_count: number;
  delivered_mar_count: number;
  on_the_way_mar_count: number;
  new_mar_count: number;
  delivered_apr_count: number;
  on_the_way_apr_count: number;
  new_apr_count: number;
  delivered_may_count: number;
  on_the_way_may_count: number;
  new_may_count: number;
  delivered_jun_count: number;
  on_the_way_jun_count: number;
  new_jun_count: number;
  delivered_jul_count: number;
  on_the_way_jul_count: number;
  new_jul_count: number;
  delivered_aug_count: number;
  on_the_way_aug_count: number;
  new_aug_count: number;
  delivered_sep_count: number;
  on_the_way_sep_count: number;
  new_sep_count: number;
  delivered_oct_count: number;
  on_the_way_oct_count: number;
  new_oct_count: number;
  delivered_nov_count: number;
  on_the_way_nov_count: number;
  new_nov_count: number;
  delivered_dec_count: number;
  on_the_way_dec_count: number;
  new_dec_count: number;
}

interface StatsResponse {
  chart: ChartResponse;
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

export const useStats = ({ year = 2022 }: { year?: number }) => {
  return useQuery(`stats`, () =>
    request
      .get<StatsResponse>(`driver/stat/detail/?year=${year}`)
      .then((res) => res.data)
  );
};
