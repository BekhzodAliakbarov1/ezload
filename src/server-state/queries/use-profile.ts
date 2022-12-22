import { useAuth } from 'global-state/auth/auth.state';
import { useQuery } from 'react-query';
import { request } from '../api';

interface ProfileResponse {
  first_name: string;
  phone_number: string;
  profile_picture?: { file: string };
  vehicle?: {
    title: string;
    licence_plate: string;
    capacity: string;
  };
}

export const useProfile = () => {
  const { userId } = useAuth();

  const typeOfRequest =
    localStorage.getItem('userType') === 'driver' ? 'driver' : 'account';
  return useQuery([`profile`], () =>
    request
      .get<ProfileResponse>(`/${typeOfRequest}/${userId}/detail/`)
      .then((res) => res.data)
  );
};
