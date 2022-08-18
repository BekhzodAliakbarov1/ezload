import { MenuItem, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAddress } from 'server-state/queries/use-address';
import { StyledSelectInput } from './address-input.styles';

const AddressInput = () => {
  const addressRequest = useAddress();
  const [location, setLocation] = useState<string>('');
  const { t } = useTranslation();

  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    const selectedAddress = addressRequest.data?.pages[0].results.filter(
      (address) => address.id === event.target.value
    );
    if (selectedAddress) {
      setLocation(String(selectedAddress[0].id));
    }
  };

  return (
    <StyledSelectInput
      fullWidth
      id="demo-simple-select"
      value={location}
      placeholder={t('My addresses')}
      onChange={handleSelectChange}
    >
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
  );
};

export default AddressInput;
