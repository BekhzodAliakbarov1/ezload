import { MenuItem, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';
import { useAddress } from 'server-state/queries/use-address';
import { StyledSelectInput } from './address-input.styles';

const AddressInput = () => {
  const [location, setLocation] = useState<number>(5);
  const addressRequest = useAddress();

  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    const selectedAddress = addressRequest.data?.pages[0].results.filter(
      (address) => address.id === event.target.value
    );
    if (selectedAddress) {
      setLocation(selectedAddress[0].id);
    }
  };

  return (
    <StyledSelectInput
      fullWidth
      id="demo-simple-select"
      value={location}
      placeholder="Your addresses"
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
