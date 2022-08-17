import Avatar from 'components/avatar';
import Button from 'components/button/button';
import GaleryIcon from 'components/icons/galery.icon';
import InfoIcon from 'components/icons/info.icon';
import FileInput from 'components/input/file-input';
import Input from 'components/input/input';
import Text from 'components/typography/text';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useUpdateCustomerProfile } from 'server-state/mutations/use-update-profile';
import { useUpload } from 'server-state/mutations/use-upload';
import {
  CreatorSignInThirdStepWrapper,
  ErrorMessageData,
  ErrorMessageWrapper,
  NameInputWrapper,
  PictureAndNameWrapper,
  ProfilePhotoUploaderWrapper,
  ThirdStepDataWrapper,
} from './third-step.styles';

const ThirdStep: React.FC<{
  token: string;
  user_id: string;
  handleLogin: () => void;
}> = ({ token, user_id, handleLogin }) => {
  const { t } = useTranslation();
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState<{
    picture_url?: string;
    picture_id?: number;
    first_name: string;
  }>({
    first_name: '',
  });
  const uploadImageRequest = useUpload();
  const updateProfileRequest = useUpdateCustomerProfile();

  const clickHandler = () => {
    if (data.first_name) {
      updateProfileRequest.mutate(
        {
          first_name: data.first_name,
          profile_picture: data.picture_id ?? '',
          user_id,
          token,
        },
        {
          onSuccess() {
            handleLogin();
          },
        }
      );
    }
  };

  const uploadFileHandler = (val: Blob | File) => {
    if (val) {
      uploadImageRequest.mutate(
        { token, file: val },
        {
          onSuccess(res) {
            setData((initialValue) => {
              return {
                ...initialValue,
                picture_id: res.id,
                picture_url: res.file,
              };
            });
          },
        }
      );
    }
  };

  const onChangeHandler = (first_name: string) => {
    setData({ ...data, first_name });
  };

  return (
    <CreatorSignInThirdStepWrapper>
      {hasError && (
        <ErrorMessageWrapper>
          <ErrorMessageData>
            <InfoIcon />
            <p>Sorry, this mobile not registered</p>
          </ErrorMessageData>
        </ErrorMessageWrapper>
      )}
      <ThirdStepDataWrapper>
        <Text size="lg" weight="800">
          {t('Additional Infomartion')}
        </Text>
        <PictureAndNameWrapper>
          <form>
            <label htmlFor="profile_photo">
              <ProfilePhotoUploaderWrapper>
                {data.picture_url ? (
                  <Avatar sizes="120px" src={data.picture_url} />
                ) : (
                  <GaleryIcon />
                )}
                <FileInput
                  onChange={(e) =>
                    e.target.files && uploadFileHandler(e.target.files[0])
                  }
                  id="profile_photo"
                  accept="image/*"
                />
              </ProfilePhotoUploaderWrapper>
            </label>
          </form>

          <NameInputWrapper>
            <label htmlFor="name">{t('Your displayed name')}</label>
            <Input
              value={data.first_name}
              onChange={(e) => onChangeHandler(e.target.value)}
              placeholder={t('Write your name')}
              id="name"
            />
          </NameInputWrapper>
        </PictureAndNameWrapper>
        <Button
          disabled={!Boolean(data.first_name)}
          fullWidth
          loading={uploadImageRequest.isLoading}
          onClick={clickHandler}
          buttonType={!Boolean(data.first_name) ? 'disabled' : 'contained'}
        >
          {uploadImageRequest.isLoading
            ? `${uploadImageRequest.progress}%`
            : t('Save')}
        </Button>
      </ThirdStepDataWrapper>
    </CreatorSignInThirdStepWrapper>
  );
};

export default ThirdStep;
