import Avatar from 'components/avatar';
import Button from 'components/button/button';
import GaleryIcon from 'components/icons/galery.icon';
import InfoIcon from 'components/icons/info.icon';
import FileInput from 'components/input/file-input';
import Input from 'components/input/input';
import Text from 'components/typography/text';
import React, { useState } from 'react';
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

const ThirdStep: React.FC<{ token: string }> = ({ token }) => {
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState<{
    file?: Blob | File;
    picture_url?: string;
    first_name: string;
  }>({
    first_name: '',
  });
  const { mutate, progress, isLoading } = useUpload();

  const clickHandler = () => {
    if (data.file) {
      mutate({ file: data.file, first_name: data.first_name, token });
    }
  };

  const uploadFileHandler = (val: Blob | File) => {
    setData({ ...data, file: val, picture_url: URL.createObjectURL(val) });
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
          Additional Infomartion
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
            <label htmlFor="name">Your displayed name</label>
            <Input
              value={data.first_name}
              onChange={(e) => onChangeHandler(e.target.value)}
              placeholder="Write your name"
              id="name"
            />
          </NameInputWrapper>
        </PictureAndNameWrapper>
        <Button
          disabled={!Boolean(data.first_name)}
          fullWidth
          loading={isLoading}
          onClick={clickHandler}
          buttonType={!Boolean(data.first_name) ? 'disabled' : 'contained'}
        >
          {isLoading ? `${progress}%` : 'Save'}
        </Button>
      </ThirdStepDataWrapper>
    </CreatorSignInThirdStepWrapper>
  );
};

export default ThirdStep;
