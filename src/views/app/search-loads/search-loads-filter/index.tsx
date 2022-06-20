import Input from 'components/input/input';
import Text from 'components/typography/text';
import React, { useState } from 'react';
import {
  SearchLoadsFilterButtonWrapper,
  SearchLoadsFilterInputsForm,
  SearchLoadsFiltersBox,
  SearchLoadsFilterWrapper,
  StyledSelect,
  StyledTextFiled,
} from './search-loads-filter.styles';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MenuItem } from '@mui/material';
import Button from 'components/button/button';

const SearchLoadsFilter = () => {
  const [value, setValue] = useState<Date | null>(new Date());

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('filter clicked');
  };

  return (
    <SearchLoadsFilterWrapper>
      <Text weight="700">Filters</Text>
      <SearchLoadsFilterInputsForm onSubmit={handleSubmit}>
        <SearchLoadsFiltersBox>
          <Text>Pickup location</Text>
          <Input placeholder="Country" />
          <Input placeholder="Region" />
        </SearchLoadsFiltersBox>
        <SearchLoadsFiltersBox>
          <Text>Delivery location</Text>
          <Input placeholder="Country" />
          <Input placeholder="Region" />
        </SearchLoadsFiltersBox>
        <SearchLoadsFiltersBox>
          <Text>Pickup date</Text>
          <DateTimePicker
            value={value}
            onChange={handleChange}
            renderInput={(params) => <StyledTextFiled {...params} />}
            disableMaskedInput
            inputFormat="d-MMMM , HH:mm "
            disablePast
          />
        </SearchLoadsFiltersBox>
        <SearchLoadsFiltersBox>
          <Text>Delivery date</Text>
          <DateTimePicker
            value={value}
            onChange={handleChange}
            renderInput={(params) => <StyledTextFiled {...params} />}
            disableMaskedInput
            inputFormat="d-MMMM , HH:mm "
            disablePast
          />
        </SearchLoadsFiltersBox>
        <SearchLoadsFiltersBox>
          <Text>Weight (in tonnes)</Text>
          <Input placeholder="e.g 500 " />
        </SearchLoadsFiltersBox>
        <SearchLoadsFiltersBox>
          <Text>Budget (in USD)</Text>
          <Input placeholder="e.g 500 " />
          <Input placeholder="e.g 500 " />
          <StyledSelect
            value={'USD'}
            // onChange={(e) => handleChangeCurrency(e.target.value as string)}
          >
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'UZS'}>UZS</MenuItem>
            <MenuItem value={'RUB'}>RUB</MenuItem>
          </StyledSelect>
        </SearchLoadsFiltersBox>
        <SearchLoadsFilterButtonWrapper>
          <Button fullWidth>Apply filters</Button>
          <Button fullWidth buttonType="secondary_dark">
            Clear filters
          </Button>
        </SearchLoadsFilterButtonWrapper>
      </SearchLoadsFilterInputsForm>
    </SearchLoadsFilterWrapper>
  );
};

export default SearchLoadsFilter;
