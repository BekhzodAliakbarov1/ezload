import { useMutation } from 'react-query';
import { request } from '../api';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

interface CreateReviewRequest {
  rate: string;
  feedback: string;
  reviewee: string;
  load: string;
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
      onError() {
        enqueueSnackbar(t('Something went wrong!'), { variant: 'error' });
      },
    }
  );
};
