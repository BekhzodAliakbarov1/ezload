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

export const useRoutes = (token?: string, user_id?: string) => {
  const {
    tokens: { access },
    userId,
  } = useAuth();

  const driver_id = user_id ?? userId;
  const accessToken = token ?? access;

  return useQuery(`routes`, () =>
    request
      .get<RoutesResponse>(`/driver/route/${driver_id}/detail/`, {
        headers: {
          Authorization: `Token ${accessToken}`,
        },
      })
      .then((res) => res.data)
  );
};
