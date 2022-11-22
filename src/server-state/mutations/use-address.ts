import { useSnackbar } from 'notistack';
import { useMutation } from 'react-query';
import { CreateAddressRequestInterface } from 'types/address.types';
import { request } from '../api';

// CREATE
export const useCreateAddress = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    (data: CreateAddressRequestInterface) =>
      request
        .post<{ message: string; status_code: number; id: number }>(
          '/address/create/',
          data
        )
        .then((res) => res.data),
    {
      retry: false,
      onError(e: any) {
        const errors = Object.entries(e.response?.data);
        errors.map((error) =>
          enqueueSnackbar(`${error} `, {
            variant: 'error',
          })
        );
      },
    }
  );
};
