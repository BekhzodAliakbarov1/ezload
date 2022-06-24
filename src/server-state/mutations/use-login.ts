import { useMutation } from 'react-query';
import { request } from '../api';
import { useSnackbar } from 'notistack';

interface ILoginRequest {
  phone_number: string;
  code: string;
  is_broker: boolean;
  is_driver: boolean;
}

interface ILoginResponse {
  message: string;
  status_code: number;
}

export const useLogin = () => {
  const { enqueueSnackbar } = useSnackbar();
  return useMutation(
    (data: ILoginRequest) =>
      request
        .post<ILoginResponse>('/account/login/', data)
        .then((res) => res.data),
    {
      retry: false,
      onSuccess() {
        enqueueSnackbar('Phone registered succesffuly!', {
          variant: 'success',
        });
      },
      onError() {
        enqueueSnackbar('Something went wrong!', { variant: 'error' });
      },
    }
  );
};
