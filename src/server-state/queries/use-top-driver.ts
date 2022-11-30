// this file is for getting only data with pagination
import { useInfiniteQuery, useQuery } from 'react-query';
import { request } from '../api';

export interface SingleDriverResponse {
  id: number;
  first_name: string;
  last_name: string;
  rates_avg: number;
  profile_picture: {
    file: string;
  };
  vehicle: {
    title: string;
    licence_plate: string;
    capacity: string;
  };
}

export interface DriversResponse {
  count: number;
  next: null | number;
  previous: null | number;
  results: SingleDriverResponse[];
}

const fetchDrivers = async ({ pageParam = 1 }: { pageParam?: number }) => {
  const data = await request
    .get<DriversResponse>(`/driver/top/list/?page=${pageParam}&limit=6`)
    .then((res) => res.data);
  return {
    results: data.results,
    nextPage: pageParam + 1,
    totalPages: Math.ceil(Number(data?.count) / 10),
  };
};

export const useTopDrivers = () => {
  return useInfiniteQuery('top drivers', fetchDrivers, {
    getNextPageParam(lastPage) {
      if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    },
  });
};

export const useSearchDrivers = (data: { query?: string }) => {
  return useQuery(
    `drivers ${data.query}`,
    () =>
      request
        .get<DriversResponse>(`/driver/list/?${data.query}`)
        .then((res) => res.data),
    {
      retry: false,
    }
  );
};
