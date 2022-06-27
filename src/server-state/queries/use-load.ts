// this file is for getting only data with pagination
import { useInfiniteQuery } from 'react-query';
import { request } from '../api';

// This is interface for commeing date it shoould be in types  folder for the best case
interface LoadsResponse {
  count: number;
  next: null | number;
  previous: null | number;
  results: [];
}

const fetchLoads = async ({
  pageParam = 1,
  status = 1,
}: {
  pageParam?: number;
  status: 1 | 2 | 3;
}) => {
  const data = await request
    .get<LoadsResponse>(
      `/load/list/?status=${status}&page=${pageParam}&limit=6`
    )
    .then((res) => res.data);
  return {
    results: data.results,
    nextPage: pageParam + 1,
    totalPages: Math.ceil(Number(data?.count) / 10),
  };
};

export const useLoads = (type: 'new' | 'on_the_way' | 'delivered') => {
  const status = type === 'new' ? 1 : type === 'on_the_way' ? 2 : 3;

  return useInfiniteQuery(['loads'], () => fetchLoads({ status }), {
    getNextPageParam(lastPage) {
      if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    },
  });
};
