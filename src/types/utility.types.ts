/* eslint-disable camelcase */
export interface Paginated<T> {
  count: number;
  results: T[];
}

export interface IListFilters {
  page?: number;
  search?: string;
  limit?: number;
  category_name?: string;
  group_id?: string;
}
