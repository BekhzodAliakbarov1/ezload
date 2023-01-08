/* eslint-disable react-hooks/exhaustive-deps */
import {
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { useData } from 'layouts/load-action-layout/load-action-layout.context';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAddress } from 'server-state/queries/use-address';
import { colors } from 'styles/variables';
import { StyledSelectInput } from './address-input.styles';

const AddressInput: React.FC<{ type: 'pickup' | 'delivery' }> = ({ type }) => {
  const { data, setValues } = useData();
  const addressRequest = useAddress();
  const { t } = useTranslation();

  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    const selectedAddress = addressRequest.data?.pages[0].results.find(
      (address) => address.id === event.target.value
    );
    if (selectedAddress) {
      setValues({ ...data, [`${type}_route`]: selectedAddress.address.id });
    }
  };

  return (
    <FormControl style={{ height: '46px' }} fullWidth>
      <InputLabel
        style={{ color: colors.dark_30 }}
        id="demo-simple-select-label"
      >
        {t('Choose from my routes')}
      </InputLabel>

      <StyledSelectInput
        fullWidth
        labelId="demo-simple-select-label"
        placeholder={t('My addresses')}
        onChange={handleSelectChange}
        label={t('Choose from my routes')}
        disabled={!addressRequest.data?.pages[0].results[0]?.id}
      >
        {/* {data[`${type}_route`] && <MenuItem value={'none'}>Clear</MenuItem>} */}
        {addressRequest.data?.pages &&
          addressRequest.data.pages.map((page) =>
            page?.results.map(({ address, id }) => (
              <MenuItem key={id} value={id}>
                {address.country.title && address.country.title}
                {address.region.title && `, ${address.region.title}`}
                {address.district.title && `, ${address.district.title}`}
                {address.postal_code && `, ${address.postal_code}`}
                {address.orientation && `, ${address.orientation}`}
              </MenuItem>
            ))
          )}
      </StyledSelectInput>
    </FormControl>
  );
};

export default AddressInput;
