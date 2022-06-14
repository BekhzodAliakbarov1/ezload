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
} from './create-load-address.styles';
import { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Input from 'components/input/input';
import CloseIcon from 'components/icons/close.icon';
import image from 'assets/img/default-image.png';
import TickIcon from 'components/icons/tick.icon';
import { colors } from 'styles/variables';

const ActionLoadAddress: React.FC<{ title: string }> = ({ title }) => {
  const [age, setAge] = useState<string>('Samarkand');
  const [checked, setChecked] = useState(false);
  console.log(checked);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setAge(event.target.value as string);
  };
  return (
    <ActionLoaddAddressWrapper>
      <Text size="md" weight="600">
        {title}
      </Text>
      <StyledSelectInput
        fullWidth
        id="demo-simple-select"
        value={age}
        onChange={handleChange}
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
          <Input placeholder="Addressline 1" />
          <Input placeholder="Addressline 2" />
          <Input placeholder="Street" />
          <Input placeholder="Region" />
          <Input placeholder="Country" />
          <Input placeholder="Zip Code" />
        </ActionLoadInputsWrapper>
        <ActionLoadMapContentWrapper>
          <ActionLoadMapWrapper style={{ backgroundImage: `url(${image})` }} />
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
