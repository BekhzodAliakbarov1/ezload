import { useMutation } from 'react-query';
import { request } from '../api';
import { useSnackbar } from 'notistack';

interface CreateReviewRequest {
  rate: string;
  feedback: string;
  reviewee: string;
  load: string;
}

export const useCreateReview = () => {
  const { enqueueSnackbar } = useSnackbar();
  return useMutation(
    (data: CreateReviewRequest) =>
      request
        .post<{ success: boolean }>('/account/review/create/', data)
        .then((res) => res.data),
    {
      retry: false,
      onSuccess() {
        enqueueSnackbar('Review sended successfully!', { variant: 'success' });
      },
      onError() {
        enqueueSnackbar('Something went wrong!', { variant: 'error' });
      },
    }
  );
};
