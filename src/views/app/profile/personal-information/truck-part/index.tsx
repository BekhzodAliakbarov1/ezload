import { IconButton } from '@mui/material';
import Button from 'components/button/button';
import PenIcon from 'components/icons/pen.icon';
import Input from 'components/input/input';
import Text from 'components/typography/text';
import React, { useState } from 'react';
import {
  TruckButtonsWrapper,
  TruckEditButtonWrapper,
  TruckInfoChangeInput,
  TruckInfoChangeWrapper,
  TruckLabelWrapper,
  TruckMainInfosWrapper,
} from './turck-part.styles';

const TruckInfo: React.FC<{
  car_model: string;
  car_capacity: string;
  car_number: string;
}> = ({ car_capacity = '', car_model = '', car_number = '' }) => {
  const [isEditing, setisEditing] = useState(false);
  const [model, setModel] = useState(car_model);
  const [capacity, setCapacity] = useState(car_capacity);
  const [carNumber, setcarNumber] = useState(car_number);

  const handleSubmit = () => {
    console.log('submit button');
  };
  const handleCancel = () => {
    setisEditing(false);
  };

  return (
    <TruckInfoChangeWrapper>
      <TruckLabelWrapper onClick={() => setisEditing((val) => !val)}>
        <Text>Truck info</Text>
        <TruckEditButtonWrapper>
          <IconButton>
            <PenIcon />
          </IconButton>
          <Text>Edit</Text>
        </TruckEditButtonWrapper>
      </TruckLabelWrapper>
      <TruckMainInfosWrapper>
        <TruckInfoChangeInput>
          <Text>Truck model</Text>
          {isEditing ? (
            <Input value={model} onChange={(e) => setModel(e.target.value)} />
          ) : (
            <Text weight="600">{model}</Text>
          )}
        </TruckInfoChangeInput>
        <TruckInfoChangeInput>
          <Text>Truck Capacity (in tonnes)</Text>
          {isEditing ? (
            <Input
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />
          ) : (
            <Text weight="600">{capacity}</Text>
          )}
        </TruckInfoChangeInput>
        <TruckInfoChangeInput>
          <Text>Truck plate number</Text>
          {isEditing ? (
            <Input
              value={carNumber}
              onChange={(e) => setcarNumber(e.target.value)}
            />
          ) : (
            <Text weight="600">{carNumber}</Text>
          )}
        </TruckInfoChangeInput>
      </TruckMainInfosWrapper>
      {isEditing && (
        <TruckButtonsWrapper>
          <Button onClick={handleSubmit}>Save changes</Button>
          <Button onClick={handleCancel} buttonType="white">
            Cancel
          </Button>
        </TruckButtonsWrapper>
      )}
    </TruckInfoChangeWrapper>
  );
};

export default TruckInfo;
