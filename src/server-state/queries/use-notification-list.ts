import { useInfiniteQuery } from 'react-query';
import { request } from '../api';

export interface LoadsResponse {
  count: number;
  next: null | number;
  previous: null | number;
  results: {
    id: number;
    creator: {
      id: number;
      first_name: string;
    };
    object_id: number;
    status: number;
    is_viewed: boolean;
    created_at: string;
  }[];
  unwatched_count: number;
}

const fetchNotifications = async ({ pageParam = 1 }) => {
  const data = await request
    .get<LoadsResponse>(`/notification/list/?&page=${pageParam}&limit=10`)
    .then((res) => res.data);
  return {
    results: data.results,
    nextPage: pageParam + 1,
    totalPages: Math.ceil(Number(data?.count) / 6),
    count: data.count,
    hasNextPage: Boolean(data.next),
    unwatched_count: data.unwatched_count,
  };
};

export const useNotificationsList = () =>
  useInfiniteQuery([`notifications`], fetchNotifications, {
    getNextPageParam(lastPage) {
      if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    },
  });
