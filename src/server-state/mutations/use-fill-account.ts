import { useMutation } from 'react-query';
import { request } from '../api';
import { useSnackbar } from 'notistack';
import { useAuth } from 'global-state/auth/auth.state';
import { useTranslation } from 'react-i18next';

interface FillAccountRequest {
  first_name: string;
  is_broker: boolean;
  is_driver: boolean;
}

export const useFillAccount = (token?: string) => {
  const { enqueueSnackbar } = useSnackbar();
  const {
    tokens: { access },
  } = useAuth();
  const accessToken = token ?? access;
  const { t } = useTranslation();
  return useMutation(
    (data: FillAccountRequest) =>
      request
        .post<{ success: boolean }>('/account/fill/', data, {
          headers: {
            Authorization: `Token ${accessToken}`,
          },
        })
        .then((res) => res.data),
    {
      retry: false,
      onSuccess() {
        enqueueSnackbar(t('Route created successfully!'), {
          variant: 'success',
        });
      },
      onError() {
        enqueueSnackbar(t('Something went wrong!'), { variant: 'error' });
      },
    }
  );
};
