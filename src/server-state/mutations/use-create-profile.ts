import { useAuth } from 'global-state/auth/auth.state';
import { useSnackbar } from 'notistack';
import { useMutation } from 'react-query';
import { request } from '../api';

interface CreateDriverProfileRequestRequest {
  user: {
    first_name: string;
    last_name: string;
    profile_picture: number;
  };
  vehicle: {
    title: string;
    licence_plate: string;
    capacity: string;
  };
  routes?: {
    country: number;
    region: number;
  }[];
  token: string;
}

export const useCreateDriverProfile = () => {
  const { enqueueSnackbar } = useSnackbar();
  return useMutation(
    (data: CreateDriverProfileRequestRequest) => {
      return request
        .post<{ success: boolean }>(`/driver/create/`, data, {
          headers: {
            Authorization: `Token ${data.token}`,
          },
        })
        .then((res) => res.data);
    },
    {
      retry: false,
      onSuccess() {
        enqueueSnackbar('Account Created successfully!', {
          variant: 'success',
        });
      },
      onError(err) {
        enqueueSnackbar('Something went wrong!', { variant: 'error' });
        console.log('ERROR', err);
      },
    }
  );
};
