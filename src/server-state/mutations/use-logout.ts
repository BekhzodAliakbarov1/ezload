import { useMutation } from 'react-query';
import { request } from '../api';
import { useSnackbar } from 'notistack';
import { useAuth } from 'global-state/auth/auth.state';
import { useTranslation } from 'react-i18next';

export const useLogout = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { logout } = useAuth();
  const { t } = useTranslation();
  return useMutation(
    () => request.get('/account/logout/').then((res) => res.data),
    {
      retry: false,
      onSuccess() {
        logout();
        enqueueSnackbar(t('Account successfully logout!'), {
          variant: 'success',
        });
      },
      onError() {
        enqueueSnackbar(t('Something went wrong!'), { variant: 'error' });
      },
    }
  );
};
