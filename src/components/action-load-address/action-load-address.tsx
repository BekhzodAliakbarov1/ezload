import Text from 'components/typography/text';
import React, { useState } from 'react';
import {
  ActionLoaddAddressWrapper,
  ActionLoadInputAndMapWrapper,
  ActionLoadInputsWrapper,
  StyledSelectInput,
  StyledText,
  ActionLoadMapContentWrapper,
  ChooseAndCreateTextWrapper,
  ClearTextWrapper,
  ActionLoadMapWrapper,
  SaveAddressWrapper,
  StyledIconButton,
} from './action-load-address.styles';
import { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Input from 'components/input/input';
import CloseIcon from 'components/icons/close.icon';
import TickIcon from 'components/icons/tick.icon';
import { colors } from 'styles/variables';
import { useData } from 'layouts/load-action-layout/load-action-layout.context';

import MapComponent from 'components/map-component';

const ActionLoadAddress: React.FC<{
  title: string;
  type: 'pickup' | 'delivery';
}> = ({ title, type }) => {
  const [location, setLocation] = useState<string>('Samarkand');
  const [checked, setChecked] = useState(false);
  const { data, setValues } = useData();
  const { addresline_1, addresline_2, country, region, street, zipcode } =
    data[type];

  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    setLocation(event.target.value as string);
  };

  const handleInputChange = (value: string, filed_name: string) => {
    setValues({
      ...data,
      [type]: {
        ...data[type],
        [filed_name]: value,
      },
    });
  };
  return (
    <ActionLoaddAddressWrapper>
      <Text size="md" weight="600">
        {title}
      </Text>
      <StyledSelectInput
        fullWidth
        id="demo-simple-select"
        value={location}
        onChange={handleSelectChange}
      >
        <MenuItem value={'Tashkent'}>Tashkent</MenuItem>
        <MenuItem value={'Samarkand'}>Samarkand</MenuItem>
        <MenuItem value={'Buxoro'}>Buxoro</MenuItem>
      </StyledSelectInput>
      <ChooseAndCreateTextWrapper>
        <StyledText>Or choose manually</StyledText>
        <ClearTextWrapper>
          <StyledIconButton>
            <CloseIcon />
          </StyledIconButton>
          <Text weight="500">Clear form</Text>
        </ClearTextWrapper>
      </ChooseAndCreateTextWrapper>
      <ActionLoadInputAndMapWrapper>
        <ActionLoadInputsWrapper>
          <Input
            onChange={(e) => handleInputChange(e.target.value, 'addresline_1')}
            placeholder="Addressline 1"
            value={addresline_1}
          />
          <Input
            onChange={(e) => handleInputChange(e.target.value, 'addresline_2')}
            placeholder="Addressline 2"
            value={addresline_2}
          />
          <Input
            onChange={(e) => handleInputChange(e.target.value, 'street')}
            placeholder="Street"
            value={street}
          />
          <Input
            onChange={(e) => handleInputChange(e.target.value, 'region')}
            placeholder="Region"
            value={region}
          />
          <Input
            onChange={(e) => handleInputChange(e.target.value, 'country')}
            placeholder="Country"
            value={country}
          />
          <Input
            onChange={(e) => handleInputChange(e.target.value, 'zipcode')}
            placeholder="Zip Code"
            value={zipcode}
          />
        </ActionLoadInputsWrapper>
        <ActionLoadMapContentWrapper>
          <ActionLoadMapWrapper>
            <MapComponent />
          </ActionLoadMapWrapper>
          <SaveAddressWrapper>
            <StyledIconButton onClick={() => setChecked(!checked)}>
              {checked ? <TickIcon /> : <TickIcon fill={colors.dark_50} />}
            </StyledIconButton>
            <Text weight="500">Save to my addresses</Text>
          </SaveAddressWrapper>
        </ActionLoadMapContentWrapper>
      </ActionLoadInputAndMapWrapper>
    </ActionLoaddAddressWrapper>
  );
};

export default ActionLoadAddress;
