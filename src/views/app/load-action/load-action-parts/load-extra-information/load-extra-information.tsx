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
import { useData } from 'layouts/load-action-layout/load-action-layout.context';
import { useTranslation } from 'react-i18next';

const LoadExtraInformation = () => {
  const { data, setValues } = useData();
  const { t } = useTranslation();
  console.log(data);

  const handleChangeCurrency = (value: string) => {
    setValues({ ...data, currency_type: value });
  };

  const handleChangeLugageSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...data, lugage_size: e.target.value });
  };

  const handleChangeCost = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...data, cost: e.target.value });
  };

  const handleDescriptionCost = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...data, description: e.target.value });
  };

  return (
    <LoadExtraInformationWrapper>
      <Text color="main_80" weight="700">
        {t('Extra information')}
      </Text>
      <LoadExtraInformationInputsWrapper>
        <LoadExtraInformationLeftSideInputsBox>
          <Input
            placeholder={t('Lugage size')}
            value={data.lugage_size}
            onChange={handleChangeLugageSize}
          />
          <LoadExtraInformationPriceInputWrapper>
            <Input
              placeholder={t('Cost')}
              type="number"
              value={data.cost}
              onChange={handleChangeCost}
            />
            <StyledSelect
              value={data.currency_type}
              onChange={(e) => handleChangeCurrency(e.target.value as string)}
            >
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'UZS'}>UZS</MenuItem>
              <MenuItem value={'RUB'}>RUB</MenuItem>
            </StyledSelect>
          </LoadExtraInformationPriceInputWrapper>
        </LoadExtraInformationLeftSideInputsBox>
        <StyledTextFiled
          sx={{
            border: 'none',
          }}
          multiline
          fullWidth
          placeholder={t('Extra information')}
          value={data.description}
          onChange={handleDescriptionCost}
        />
      </LoadExtraInformationInputsWrapper>
    </LoadExtraInformationWrapper>
  );
};

export default LoadExtraInformation;
