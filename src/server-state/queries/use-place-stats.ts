import { useQuery } from 'react-query';
import { request } from '../api';

export const usePlaceStats = () => {
  return useQuery([`stats`], () =>
    request
      .get<{ country_count: number; region_count: number }>(
        `/area/country/stat/`
      )
      .then((res) => res.data)
  );
};
