import { useMutation, useQueryClient } from 'react-query';
import { request } from '../api';

export const useReadAllNotification = () => {
  const qc = useQueryClient();
  return useMutation(
    () => {
      return request
        .post(`/notification/read/all/`)
        .then((res) => res.data);
    },
    {
      onSuccess() {
        qc.invalidateQueries([`notifications`]);
      },
    }
  );
};
