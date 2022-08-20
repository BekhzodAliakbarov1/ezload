/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from 'react-query';
import { request } from '../api';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

interface CreateReviewRequest {
  rate: number;
  feedback: string;
  reviewee?: string;
  load?: number;
}

export const useCreateReview = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  return useMutation(
    (data: CreateReviewRequest) =>
      request
        .post<{ success: boolean }>('/account/review/create/', data)
        .then((res) => res.data),
    {
      retry: false,
      onSuccess() {
        enqueueSnackbar(t('Review sended successfully!'), {
          variant: 'success',
        });
      },
      onError(err: any) {
        enqueueSnackbar(err.response.data.errors.message, {
          variant: 'error',
        });
      },
    }
  );
};
