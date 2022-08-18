import { useMutation } from 'react-query';
import { request } from '../api';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

interface IVerificationRequest {
  phone_number: string;
}

interface IVerificationResponse {
  message: string;
  status_code: number;
}

export const useVerification = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  return useMutation(
    (data: IVerificationRequest) =>
      request
        .post<IVerificationResponse>('/sms/send_code/', data)
        .then((res) => res.data),
    {
      retry: false,
      onSuccess() {
        enqueueSnackbar(t('Verification code sent successfully!'), {
          variant: 'success',
        });
      },
      onError() {
        enqueueSnackbar(t('Something went wrong!'), { variant: 'error' });
      },
    }
  );
};
