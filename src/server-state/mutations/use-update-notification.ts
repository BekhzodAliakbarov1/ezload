import { useMutation } from 'react-query';
import { request } from '../api';

export const useUpdateNotification = () => {
  return useMutation(({ notification_id }: { notification_id: number }) => {
    return request
      .post(`/notification/${notification_id}/update/`)
      .then((res) => res.data);
  });
};
