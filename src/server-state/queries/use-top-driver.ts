import { request } from '../api';
import { useQuery } from 'react-query';

interface RoutesResponse {
  routes: {
    id: number;
    country: {
      id: number;
      title: string;
    };
    region: {
      id: number;
      title: string;
    };
  }[];
}

export const useTopDrivers = () => {
  return useQuery(`top drivers unouth`, () =>
    request.get<RoutesResponse>(`/driver/top/list/`).then((res) => res.data)
  );
};
