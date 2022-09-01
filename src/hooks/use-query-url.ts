import { useMemo } from 'react';
import { useLocation } from 'react-router';

export const useQueryUrl = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};
