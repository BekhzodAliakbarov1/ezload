/* eslint-disable camelcase */
export interface Paginated<T> {
  count: number;
  results: T[];
}

export interface IListFilters {
  page?: number;
  search?: string;
  limit?: number;
  country?: string;
  region?: string;
}
