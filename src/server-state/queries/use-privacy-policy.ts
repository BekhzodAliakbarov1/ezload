import { useQuery } from 'react-query';
import { request } from '../api';

export const usePrivacyPolicy = () =>
  useQuery(`privacy policy`, () =>
    request.get(`/policy/detail/`).then((res) => res.data)
  );
