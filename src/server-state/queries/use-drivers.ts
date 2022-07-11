// this file is for getting only data with pagination
import { useInfiniteQuery } from 'react-query';
import { request } from '../api';

interface DriversResponse {
  count: number;
  next: null | number;
  previous: null | number;
  results: {
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
  }[];
}

const fetchDrivers = async ({
  pageParam = 1,
  type,
}: {
  pageParam?: number;
  type: 'worked_before' | 'top' | 'other';
}) => {
  const data = await request
    .get<DriversResponse>(`/driver/${type}/list/?page=${pageParam}&limit=6`)
    .then((res) => res.data);
  return {
    results: data.results,
    nextPage: pageParam + 1,
    totalPages: Math.ceil(Number(data?.count) / 10),
  };
};

export const useDrivers = (type: 'worked_before' | 'top' | 'other') => {
  return useInfiniteQuery(['drivers', type], () => fetchDrivers({ type }), {
    getNextPageParam(lastPage) {
      if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    },
  });
};
