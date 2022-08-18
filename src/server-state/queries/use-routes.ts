import { request } from '../api';
import { useQuery } from 'react-query';
import { useAuth } from 'global-state/auth/auth.state';

interface RoutesResponse {
  routes: {
    id: number;
    country: {
      id: number;
      title: string;
    };
    region: {
      id: number;
      title: string;
    };
  }[];
}

export const useRoutes = (token?: string) => {
  const {
    tokens: { access },
  } = useAuth();

  const accessToken = token ?? access;

  return useQuery(`routes`, () =>
    request
      .get<RoutesResponse>(`/driver/route/detail/`, {
        headers: {
          Authorization: `Token ${accessToken}`,
        },
      })
      .then((res) => res.data)
  );
};
