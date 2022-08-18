import { IconButton } from '@mui/material';
import Button from 'components/button/button';
import PenIcon from 'components/icons/pen.icon';
import Input from 'components/input/input';
import Text from 'components/typography/text';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useUpdateVehicle } from 'server-state/mutations/use-update-vehicle';
import {
  TruckButtonsWrapper,
  TruckEditButtonWrapper,
  TruckInfoChangeInput,
  TruckInfoChangeWrapper,
  TruckLabelWrapper,
  TruckMainInfosWrapper,
} from './truck-part.styles';

const TruckInfo: React.FC<{
  car_model?: string;
  car_capacity?: string;
  car_number?: string;
}> = ({ car_capacity = '', car_model = '', car_number = '' }) => {
  const { t } = useTranslation();
  const [isEditing, setisEditing] = useState(false);
  const [model, setModel] = useState(car_model);
  const [capacity, setCapacity] = useState(car_capacity);
  const [carNumber, setcarNumber] = useState(car_number);
  const updateVehicleRequest = useUpdateVehicle();

  const handleSubmit = () => {
    updateVehicleRequest.mutate(
      {
        capacity: Number(capacity),
        licence_plate: carNumber,
        title: model,
      },
      {
        onSuccess() {
          setisEditing(false);
        },
      }
    );
  };
  const handleCancel = () => {
    setisEditing(false);
  };

  return (
    <TruckInfoChangeWrapper>
      <TruckLabelWrapper onClick={() => setisEditing((val) => !val)}>
        <Text color="main_90">{t('Truck info')}</Text>
        <TruckEditButtonWrapper>
          <IconButton>
            <PenIcon />
          </IconButton>
          <Text>{t('Edit')}</Text>
        </TruckEditButtonWrapper>
      </TruckLabelWrapper>
      <TruckMainInfosWrapper>
        <TruckInfoChangeInput>
          <Text>{t('Truck model')}</Text>
          {isEditing ? (
            <Input value={model} onChange={(e) => setModel(e.target.value)} />
          ) : (
            <Text weight="600">{model}</Text>
          )}
        </TruckInfoChangeInput>
        <TruckInfoChangeInput>
          <Text>{t('Truck Capacity (in tonnes)')}</Text>
          {isEditing ? (
            <Input
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />
          ) : (
            <Text weight="600">{capacity} kg</Text>
          )}
        </TruckInfoChangeInput>
        <TruckInfoChangeInput>
          <Text>{t('Truck plate number')}</Text>
          {isEditing ? (
            <Input
              value={carNumber}
              onChange={(e) => setcarNumber(e.target.value)}
            />
          ) : (
            <Text color="main_100" weight="600">
              {carNumber}
            </Text>
          )}
        </TruckInfoChangeInput>
      </TruckMainInfosWrapper>
      {isEditing && (
        <TruckButtonsWrapper>
          <Button onClick={handleSubmit}>{t('Save changes')}</Button>
          <Button onClick={handleCancel} buttonType="white">
            {t('Cancel')}
          </Button>
        </TruckButtonsWrapper>
      )}
    </TruckInfoChangeWrapper>
  );
};

export default TruckInfo;
