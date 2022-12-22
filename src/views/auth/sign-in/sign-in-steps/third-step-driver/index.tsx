import { Tooltip } from '@mui/material';
import Avatar from 'components/avatar';
import Button from 'components/button/button';
import GaleryIcon from 'components/icons/galery.icon';
import InfoIcon from 'components/icons/info.icon';
import PlusIcon from 'components/icons/plus.icon';
import FileInput from 'components/input/file-input';
import Input from 'components/input/input';
import Text from 'components/typography/text';
import { useSteps } from 'global-state/step/step-context';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCreateDriverProfile } from 'server-state/mutations/use-create-profile';
import { useUpload } from 'server-state/mutations/use-upload';
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

const ThirdStepDriver: React.FC<{
  token: string;
  name: string;
}> = ({ token, name }) => {
  const { t } = useTranslation();
  const [hasError] = useState(false);
  const [data, setData] = useState<{
    picture_url?: string;
    picture_id?: number;
    vehicle_title: string;
    licence_plate: string;
    capacity: string;
  }>({
    capacity: '',
    licence_plate: '',
    vehicle_title: '',
  });
  const createProfileRequest = useCreateDriverProfile();
  const { nextStep } = useSteps();
  const uploadImageRequest = useUpload();

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

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    createProfileRequest.mutate(
      {
        token,
        user: {
          first_name: name,
          last_name: name,
          profile_picture: data.picture_id ?? null,
        },
        vehicle: {
          capacity: data.capacity,
          licence_plate: data.licence_plate,
          title: data.vehicle_title,
        },
        routes: [],
      },
      {
        onSuccess() {
          nextStep();
        },
      }
    );
  };

  return (
    <DriverSignInThirdStepWrapper onSubmit={submitHandler}>
      {hasError && (
        <ErrorMessageWrapper>
          <ErrorMessageData>
            <InfoIcon />
            <p>{t('Sorry, this mobile not registered')}</p>
          </ErrorMessageData>
        </ErrorMessageWrapper>
      )}
      <ThirdStepDataWrapper>
        <Text size="lg" weight="800">
          {t('Personal and truck info')}
        </Text>
        <SignInStepShowInfoWrapper>
          <Text color="main_90" size="lg" weight="800">
            {t('Step')} 1/2
          </Text>
        </SignInStepShowInfoWrapper>
        <PictureAndNameWrapper>
          <label htmlFor="profile_photo">
            <ProfilePhotoUploaderWrapper>
              {data.picture_url ? (
                <>
                  <Tooltip title={t('Change Photo')}>
                    <div className="avatar">
                      <PlusIcon className="plus" size="50" />
                      <Avatar sizes="120px" src={data.picture_url} />
                    </div>
                  </Tooltip>
                </>
              ) : (
                <>
                  <GaleryIcon className="galery" />
                  <PlusIcon className="plus" />
                </>
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
        </PictureAndNameWrapper>
        <TruckInputsWrapper>
          <Text>{t('Truck info')}</Text>
          <Input
            value={data.vehicle_title}
            onChange={(e) =>
              setData({ ...data, vehicle_title: e.target.value })
            }
            placeholder={t('Truck model')}
          />
          <Input
            value={data.licence_plate}
            onChange={(e) =>
              setData({ ...data, licence_plate: e.target.value })
            }
            placeholder={`${t('Plate number')} ex: 01 A 777 AA`}
          />
          <Input
            value={data.capacity}
            type="number"
            onChange={(e) => setData({ ...data, capacity: e.target.value })}
            placeholder={`${t('Truck capacity (in tonnes)')} ex: 10`}
          />
        </TruckInputsWrapper>
        <Button
          disabled={
            !Boolean(data.capacity) ||
            !Boolean(data.licence_plate) ||
            !Boolean(data.vehicle_title) ||
            !Boolean(data.picture_id)
          }
          fullWidth
          type="submit"
        >
          {t('Next')}
        </Button>
      </ThirdStepDataWrapper>
    </DriverSignInThirdStepWrapper>
  );
};

export default ThirdStepDriver;
