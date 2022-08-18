import { useMutation } from 'react-query';
import { CreateAddressRequestInterface } from 'types/address.types';
import { request } from '../api';

// CREATE
export const useCreateAddress = () => {
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
    }
  );
};
