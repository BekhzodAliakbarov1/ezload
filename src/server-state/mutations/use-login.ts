import { useMutation } from 'react-query';
import { request } from '../api';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

interface ILoginRequest {
  phone_number: string;
  code: string;
  is_broker: boolean;
  is_driver: boolean;
}

interface ILoginResponse {
  message: string;
  status_code: number;
  is_new_user: boolean;
  token: string;
  id: string;
  id_broker: boolean;
  id_driver: boolean;
}

export const useLogin = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  return useMutation(
    (data: ILoginRequest) =>
      request
        .post<ILoginResponse>('/account/login/', data)
        .then((res) => res.data),
    {
      retry: false,
      onSuccess(res) {
        if (res.status_code === 201 || res.status_code === 200) {
          enqueueSnackbar(t('Phone registered successfully!'), {
            variant: 'success',
          });
        }
      },
      onError() {
        enqueueSnackbar(t('Something went wrong!'), { variant: 'error' });
      },
    }
  );
};
