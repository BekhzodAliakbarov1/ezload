import { useAuth } from 'global-state/auth/auth.state';
import { useSnackbar } from 'notistack';
import { useMutation } from 'react-query';
import { request } from '../api';

interface UpdateProfileRequestRequest {
  first_name?: string;
  profile_picture?: number | string;
  user_id?: string;
  token?: string;
}

export const useUpdateProfile = () => {
  const {
    userId,
    tokens: { access },
  } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  return useMutation(
    (data: UpdateProfileRequestRequest) => {
      const user_id = data.user_id ?? userId;
      const token = data.token ?? access;
      return request
        .put<{ success: boolean }>(`/account/${user_id}/update/`, data, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((res) => res.data);
    },
    {
      retry: false,
      onSuccess() {
        enqueueSnackbar('Account updated successfully!', {
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
