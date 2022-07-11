import { useInfiniteQuery } from 'react-query';
import { SingleLoadResponse } from 'types/load.types';
import { request } from '../api';

interface LoadsResponse {
  count: number;
  next: null | number;
  previous: null | number;
  results: SingleLoadResponse[];
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
    totalPages: Math.ceil(Number(data?.count) / 6),
    count: data.count,
  };
};

export const useLoads = (type: 'new' | 'on_the_way' | 'delivered') => {
  let status: 1 | 2 | 3;
  if (type === 'new') {
    status = 1;
  } else if (type === 'on_the_way') {
    status = 2;
  } else {
    status = 3;
  }

  return useInfiniteQuery(['loads', type], () => fetchLoads({ status }), {
    enabled: false,
    getNextPageParam(lastPage) {
      if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    },
  });
};
