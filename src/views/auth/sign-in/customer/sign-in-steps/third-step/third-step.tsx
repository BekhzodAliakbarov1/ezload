import Button from 'components/button/button';
import GaleryIcon from 'components/icons/galery.icon';
import InfoIcon from 'components/icons/info.icon';
import FileInput from 'components/input/file-input';
import Input from 'components/input/input';
import Text from 'components/typography/text';
import React, { useState } from 'react';
import {
  CreatorSignInThirdStepWrapper,
  ErrorMessageData,
  ErrorMessageWrapper,
  NameInputWrapper,
  PictureAndNameWrapper,
  ProfilePhotoUploaderWrapper,
  ThirdStepDataWrapper,
} from './third-step.styles';

const ThirdStep = () => {
  const [hasError, setHasError] = useState(false);

  return (
    <CreatorSignInThirdStepWrapper>
      {hasError && (
        <ErrorMessageWrapper>
          <ErrorMessageData>
            <InfoIcon />
            <p color="light">Sorry, this mobile not registered</p>
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
                <GaleryIcon />
                <FileInput
                  onChange={(e) => console.log(e)}
                  id="profile_photo"
                  accept="image/*"
                />
              </ProfilePhotoUploaderWrapper>
            </label>
          </form>
          <NameInputWrapper>
            <label htmlFor="name">Your displayed name</label>
            <Input placeholder="Write your name" id="name" />
          </NameInputWrapper>
        </PictureAndNameWrapper>
        <Button fullWidth>Save</Button>
      </ThirdStepDataWrapper>
    </CreatorSignInThirdStepWrapper>
  );
};

export default ThirdStep;
