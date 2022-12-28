import { useQuery } from 'react-query';
import { request } from '../api';

export const usePrivacyPolicy = ({ language }: { language?: string }) =>
  useQuery(`privacy policym ${language}`, () =>
    request
      .get<{ results: { title: string }[] }>(`/policy/detail/`)
      .then((res) => res.data)
  );
