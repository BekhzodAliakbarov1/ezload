import { useMutation } from 'react-query';
import { request } from '../api';
import { useSnackbar } from 'notistack';

interface CreateRouteRequest {
  country: string;
  region: string;
}

export const useCreateRoute = () => {
  const { enqueueSnackbar } = useSnackbar();
  return useMutation(
    (data: CreateRouteRequest) =>
      request
        .post<{ success: boolean }>('/driver/route/create/', data)
        .then((res) => res.data),
    {
      retry: false,
      onSuccess() {
        enqueueSnackbar('Route created successfully!', { variant: 'success' });
      },
      onError() {
        enqueueSnackbar('Something went wrong!', { variant: 'error' });
      },
    }
  );
};
