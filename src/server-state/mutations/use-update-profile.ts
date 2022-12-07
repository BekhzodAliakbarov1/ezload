import { useAuth } from 'global-state/auth/auth.state';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import { request } from '../api';

interface UpdateCustomerProfileRequestRequest {
  first_name?: string;
  profile_picture?: number | string;
  user_id?: string;
  token?: string;
}

export const useUpdateCustomerProfile = () => {
  const { t } = useTranslation();
  const {
    userId,
    tokens: { access },
  } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  return useMutation(
    (data: UpdateCustomerProfileRequestRequest) => {
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
        enqueueSnackbar(t('Account updated successfully!'), {
          variant: 'success',
        });
      },
      onError(err) {
        enqueueSnackbar(t('Something went wrong!'), { variant: 'error' });
      },
    }
  );
};
