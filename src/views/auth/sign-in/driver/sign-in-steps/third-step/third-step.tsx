import Button from 'components/button/button';
import GaleryIcon from 'components/icons/galery.icon';
import InfoIcon from 'components/icons/info.icon';
import FileInput from 'components/input/file-input';
import Input from 'components/input/input';
import Text from 'components/typography/text';
import { useSteps } from 'global-state/step/step-context';
import React, { useState } from 'react';
import {
  DriverSignInThirdStepWrapper,
  ErrorMessageData,
  ErrorMessageWrapper,
  NameInputWrapper,
  PictureAndNameWrapper,
  ProfilePhotoUploaderWrapper,
  SignInStepShowInfoWrapper,
  ThirdStepDataWrapper,
  TruckInputsWrapper,
} from './third-step.styles';

const ThirdStep = () => {
  const [hasError, setHasError] = useState(false);
  const { nextStep } = useSteps();

  return (
    <DriverSignInThirdStepWrapper>
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
          Personal and truck info
        </Text>
        <SignInStepShowInfoWrapper>
          <Text size="lg" weight="800">
            Step 1/2
          </Text>
        </SignInStepShowInfoWrapper>
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
            <label htmlFor="name">Display photo and name</label>
            <Input placeholder="Write your name" id="name" />
          </NameInputWrapper>
        </PictureAndNameWrapper>
        <TruckInputsWrapper>
          <Text>Truck info</Text>
          <Input placeholder="Truck model" />
          <Input placeholder="Plate number" />
          <Input placeholder="Truck capacity (in tonnes)" />
        </TruckInputsWrapper>
        <Button fullWidth onClick={nextStep}>
          Next
        </Button>
      </ThirdStepDataWrapper>
    </DriverSignInThirdStepWrapper>
  );
};

export default ThirdStep;
