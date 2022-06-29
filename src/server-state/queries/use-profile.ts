import { useAuth } from 'global-state/auth/auth.state';
import { useQuery } from 'react-query';
import { request } from '../api';

interface ProfileResponse {
  first_name: string;
}

export const useProfile = () => {
  const { userId } = useAuth();
  return useQuery([`profile`], () =>
    request
      .get<ProfileResponse>(`/account/${userId}/detail/`)
      .then((res) => res.data)
  );
};
