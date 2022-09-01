import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import { request } from '../api';

interface UpdatePhoneNumberRequestRequest {
  phone_number: string;
  code: string;
}

export const useUpdatePhoneNumber = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  return useMutation(
    (data: UpdatePhoneNumberRequestRequest) => {
      return request
        .post<{ success: boolean }>(`/account/update/phone_number/`, data)
        .then((res) => res.data);
    },
    {
      retry: false,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onSuccess(data: any) {
        if (data.status_code !== 400) {
          enqueueSnackbar(t('Phone number updated successfully!'), {
            variant: 'success',
          });
        } else {
          enqueueSnackbar(t('Something went wrong!'), {
            variant: 'error',
          });
        }
      },
      onError() {
        enqueueSnackbar(t('Something went wrong!'), { variant: 'error' });
      },
    }
  );
};
