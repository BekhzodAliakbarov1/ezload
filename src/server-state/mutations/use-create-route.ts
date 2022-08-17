import { useMutation } from 'react-query';
import { request } from '../api';
import { useSnackbar } from 'notistack';
import { useAuth } from 'global-state/auth/auth.state';
import { useTranslation } from 'react-i18next';

interface CreateRouteRequest {
  country: string;
  region: string;
}

export const useCreateRoute = (token?: string) => {
  const { enqueueSnackbar } = useSnackbar();
  const {
    tokens: { access },
  } = useAuth();
  const accessToken = token ?? access;
  const { t } = useTranslation();
  return useMutation(
    (data: CreateRouteRequest) =>
      request
        .post<{ success: boolean }>('/driver/route/create/', data, {
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
