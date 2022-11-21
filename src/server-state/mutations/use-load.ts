import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from 'react-query';
import { request } from '../api';

interface CreateLoadRequest {
  pickup_point: number;
  destination: number;
  title: string;
  description: string;
  earliest_pick_up?: Date | string;
  latest_pick_up?: Date | string;
  earliest_delivery?: Date | string;
  latest_delivery?: Date | string;
  price: number;
  weight: number;
  mobile: boolean;
  web: boolean;
  currency: string;
}
interface EditAddressRequest extends CreateLoadRequest {
  id: string;
}
interface DeleteLoadRequest {
  id?: number | string;
}

// CREATE
export const useCreateLoad = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  return useMutation(
    (data: CreateLoadRequest) =>
      request
        .post<{ success: boolean }>('/load/create/', data)
        .then((res) => res.data),
    {
      retry: false,
      onSuccess() {
        enqueueSnackbar(t('Load created successfully!'), {
          variant: 'success',
        });
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError(e: any) {
        const errors = Object.entries(e.response?.data);
        errors.map((error) =>
          enqueueSnackbar(`${error} `, {
            variant: 'error',
          })
        );
      },
      // onError() {
      //   enqueueSnackbar(t('Something went wrong!'), { variant: 'error' });
      // },
    }
  );
};

// EDIT
export const useEditLoad = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    (data: EditAddressRequest) =>
      request
        .put<{ success: boolean }>(`/load/${data.id}/update/`, data)
        .then((res) => res.data),
    {
      retry: false,
      onSuccess() {
        enqueueSnackbar('Load edited successfully!', { variant: 'success' });
      },
      onError() {
        enqueueSnackbar('Something went wrong!', { variant: 'error' });
      },
    }
  );
};
// DELETE
export const useDeleteLoad = () => {
  const { enqueueSnackbar } = useSnackbar();
  const qc = useQueryClient();

  return useMutation(
    (data: DeleteLoadRequest) =>
      request
        .delete<{ success: boolean }>(`/load/${data.id}/delete/`)
        .then((res) => res.data),
    {
      retry: false,
      onSuccess() {
        enqueueSnackbar('Load deleted succesffuly!', {
          variant: 'success',
        });
        qc.invalidateQueries(['loads_new']);
      },
      onError() {
        enqueueSnackbar('Something went wrong!', {
          variant: 'error',
        });
      },
    }
  );
};
