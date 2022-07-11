import usePaginatedQuery from 'hooks/use-paginated-query';

interface SearchRegionResponse {
  id: number;
  title: string;
  language: string;
}
interface SearchRegionFilters {
  page?: number;
  search?: string;
  limit?: number;
  country: string;
}

export const useRegion = (filters?: SearchRegionFilters) =>
  usePaginatedQuery<SearchRegionResponse>(['region', filters], {
    path: 'area/region/list/',
    limit: 10,
    search: filters?.search,
    country: filters?.country,
  });
