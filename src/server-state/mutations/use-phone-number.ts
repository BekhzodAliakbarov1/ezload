import { useSnackbar } from 'notistack';
import { useMutation } from 'react-query';
import { request } from '../api';

interface UpdatePhoneNumberRequestRequest {
  phone_number: string;
  code: string;
}

export const useUpdatePhoneNumber = () => {
  const { enqueueSnackbar } = useSnackbar();
  return useMutation(
    (data: UpdatePhoneNumberRequestRequest) => {
      return request
        .post<{ success: boolean }>(`/account/update/phone_number/`, data)
        .then((res) => res.data);
    },
    {
      retry: false,
      onSuccess() {
        enqueueSnackbar('Phone number updated successfully!', {
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
