/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDriver } from 'hooks/use-driver';
import { useInfiniteQuery, useQuery } from 'react-query';
import { SingleLoadResponse } from 'types/load.types';
import { request } from '../api';

export interface LoadsResponse {
  count: number;
  next: null | number;
  previous: null | number;
  results: SingleLoadResponse[];
}

const fetchLoads = async ({
  pageParam,
  status = 1,
}: {
  pageParam: number;
  status: 1 | 2 | 3;
}) => {
  const data = await request
    .get<LoadsResponse>(`/load/list/?status=${status}&page=${pageParam}`)
    .then((res) => res.data);
  return {
    results: data.results,
    nextPage: pageParam + 1,
    totalPages: Math.ceil(Number(data?.count) / 6),
    count: data.count,
    hasNextPage: Boolean(data.next),
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

  return useInfiniteQuery(
    [`loads_${type}`],
    ({ pageParam = 1 }) => fetchLoads({ status, pageParam }),
    {
      enabled: false,
      getNextPageParam(lastPage) {
        if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    }
  );
};

export const useSearchLoads = (data: { query?: string }) => {
  const { isDriver } = useDriver();
  const url = isDriver ? `/driver/load/list/` : `/load/list/`;

  return useQuery(
    `loads ${data.query}`,
    () =>
      request
        .get<LoadsResponse>(`${url}?${data.query}`)
        .then((res) => res.data),
    {
      retry: false,
    }
  );
};
