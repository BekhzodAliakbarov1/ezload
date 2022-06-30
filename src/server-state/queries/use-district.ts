import usePaginatedQuery from 'hooks/use-paginated-query';

interface SearchDistrictResponse {
  id: number;
  title: string;
  language: string;
}
interface SearchDistrictFilters {
  page?: number;
  search?: string;
  limit?: number;
  country: string;
  region: string;
}

export const useDistrict = (filters?: SearchDistrictFilters) =>
  usePaginatedQuery<SearchDistrictResponse>(['district', filters], {
    path: 'area/district/list/',
    limit: 10,
    search: filters?.search,
    country: filters?.country,
    region: filters?.region,
  });
