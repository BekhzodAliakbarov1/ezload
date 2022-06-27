import { useMutation } from 'react-query';
import { useState } from 'react';
import { request } from '../api';

interface UploadRequest {
  file?: Blob | File;
  first_name?: string;
  token: string;
}

export const useUpload = () => {
  const [progress, setProgress] = useState<number>(0);
  const mutationObject = useMutation(
    (data: UploadRequest) => {
      const fd = new FormData();
      fd.append('profile_picture', data.file ?? '');
      fd.append('first_name', data.first_name ?? '');
      return request
        .put<{ result: { file_name: string } }>('/account/5/update/', fd, {
          headers: {
            Authorization: `Token ${data.token}`,
          },
          onUploadProgress: (progressEvent) => {
            const progressAmount = Math.floor(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(progressAmount);
          },
        })
        .then((res) => res.data);
    },
    {
      retry: false,
    }
  );
  return { progress, ...mutationObject };
};
