import { useMutation } from 'react-query';
import { request } from '../api';
import { useSnackbar } from 'notistack';
import { useAuth } from 'global-state/auth/auth.state';

export const useLogout = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { logout } = useAuth();
  return useMutation(
    () => request.get('/account/logout/').then((res) => res.data),
    {
      retry: false,
      onSuccess() {
        logout();
        enqueueSnackbar('Account succesffuly logout!', {
          variant: 'success',
        });
      },
      onError() {
        enqueueSnackbar('Something went wrong!', { variant: 'error' });
      },
    }
  );
};
