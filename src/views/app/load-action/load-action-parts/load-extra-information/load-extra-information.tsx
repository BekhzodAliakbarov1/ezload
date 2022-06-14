import Input from 'components/input/input';
import Text from 'components/typography/text';
import React from 'react';
import {
  LoadExtraInformationInputsWrapper,
  LoadExtraInformationLeftSideInputsBox,
  LoadExtraInformationPriceInputWrapper,
  LoadExtraInformationWrapper,
  StyledSelect,
  StyledTextFiled,
} from './load-extra-information.styles';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';

const LoadExtraInformation = () => {
  const [currency, setCurrency] = React.useState('USD');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (value: string) => {
    setCurrency(value);
  };
  return (
    <LoadExtraInformationWrapper>
      <Text weight="700">Extra information</Text>
      <LoadExtraInformationInputsWrapper>
        <LoadExtraInformationLeftSideInputsBox>
          <Input placeholder="Lugage size " />
          <LoadExtraInformationPriceInputWrapper>
            <Input placeholder="Cost" type="number" />
            <StyledSelect
              value={currency}
              onChange={(e) => handleChange(e.target.value as string)}
            >
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'UZS'}>UZS</MenuItem>
              <MenuItem value={'RUB'}>RUB</MenuItem>
            </StyledSelect>
          </LoadExtraInformationPriceInputWrapper>
        </LoadExtraInformationLeftSideInputsBox>
        <StyledTextFiled multiline fullWidth placeholder="Extra information" />
      </LoadExtraInformationInputsWrapper>
    </LoadExtraInformationWrapper>
  );
};

export default LoadExtraInformation;
