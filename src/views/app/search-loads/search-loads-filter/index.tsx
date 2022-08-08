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
import CountryInput from 'components/input/country-input';
import RegionInput from 'components/input/region-input';
import { emptyState, SearchLoadFilterType } from '..';

const SearchLoadsFilter: React.FC<{
  handleClick: (data: SearchLoadFilterType) => void;
}> = ({ handleClick }) => {
  const [filterData, setFilterData] =
    useState<SearchLoadFilterType>(emptyState);

  const clearFileds = () => {
    setFilterData(emptyState);
  };
  const handleLocationChange = ({
    id,
    title,
    type,
  }: {
    id: string;
    title: string;
    type:
      | 'pickup_point_country'
      | 'pickup_point_region'
      | 'destination_point_country'
      | 'destination_point_region';
  }) => {
    setFilterData({
      ...filterData,
      [type]: {
        id,
        title,
      },
    });
  };

  const handleDateChange = (
    newValue: Date | null,
    type: 'pickup_date' | 'deliver_date'
  ) => {
    setFilterData({
      ...filterData,
      [type]: newValue?.toLocaleDateString('uz'),
    });
  };
  const handleWeightChange = (weight: string) => {
    setFilterData({ ...filterData, weight });
  };
  const handlePriceChange = (
    price: string,
    type: 'price_from' | 'price_to'
  ) => {
    setFilterData({ ...filterData, [type]: price });
  };
  const handleSubmit = () => {
    handleClick(filterData);
    clearFileds();
  };

  return (
    <SearchLoadsFilterWrapper>
      <Text weight="700">Filters</Text>
      <SearchLoadsFilterInputsForm>
        <SearchLoadsFiltersBox>
          <Text color="main_90">Pickup location</Text>
          <CountryInput
            value={filterData.pickup_point_country?.title ?? ''}
            selectHanlder={({ id, title }) =>
              handleLocationChange({
                id,
                title,
                type: 'pickup_point_country',
              })
            }
          />
          <RegionInput
            country={filterData.pickup_point_country?.title ?? ''}
            value={filterData.pickup_point_region?.title ?? ''}
            selectHanlder={({ id, title }) =>
              handleLocationChange({
                id,
                title,
                type: 'pickup_point_region',
              })
            }
          />
        </SearchLoadsFiltersBox>
        <SearchLoadsFiltersBox>
          <Text color="main_90">Delivery location</Text>
          <CountryInput
            value={filterData.destination_point_country?.title ?? ''}
            selectHanlder={({ id, title }) =>
              handleLocationChange({
                id,
                title,
                type: 'destination_point_country',
              })
            }
          />
          <RegionInput
            country={filterData.destination_point_country?.title ?? ''}
            value={filterData.destination_point_region?.title ?? ''}
            selectHanlder={({ id, title }) =>
              handleLocationChange({
                id,
                title,
                type: 'destination_point_region',
              })
            }
          />
        </SearchLoadsFiltersBox>
        <SearchLoadsFiltersBox>
          <Text color="main_90">Pickup date</Text>
          <DateTimePicker
            value={
              filterData.pickup_date ? new Date(filterData.pickup_date) : null
            }
            onChange={(e) => handleDateChange(e, 'pickup_date')}
            renderInput={(params) => <StyledTextFiled {...params} />}
            disableMaskedInput
            inputFormat="d-MMMM , HH:mm "
            disablePast
          />
        </SearchLoadsFiltersBox>
        <SearchLoadsFiltersBox>
          <Text color="main_90">Delivery date</Text>
          <DateTimePicker
            value={
              filterData.deliver_date ? new Date(filterData.deliver_date) : null
            }
            onChange={(e) => handleDateChange(e, 'deliver_date')}
            renderInput={(params) => <StyledTextFiled {...params} />}
            disableMaskedInput
            inputFormat="d-MMMM , HH:mm "
            disablePast
            minDate={new Date(filterData.pickup_date ?? '')}
          />
        </SearchLoadsFiltersBox>
        <SearchLoadsFiltersBox>
          <Text color="main_90">Weight (in tonnes)</Text>
          <Input
            value={filterData.weight ?? ''}
            onChange={(e) => handleWeightChange(e.target.value)}
            placeholder="e.g 500 "
          />
        </SearchLoadsFiltersBox>
        <SearchLoadsFiltersBox>
          <Text color="main_90">Budget (in USD)</Text>
          <Input
            onChange={(e) => handlePriceChange(e.target.value, 'price_from')}
            value={filterData.price_from ?? ''}
            placeholder="From(e.g 500) "
          />
          <Input
            onChange={(e) => handlePriceChange(e.target.value, 'price_to')}
            value={filterData.price_to ?? ''}
            placeholder="To(e.g 500) "
          />
          <StyledSelect
            value={filterData.currency}
            onChange={(e) =>
              setFilterData({
                ...filterData,
                currency: String(e.target.value),
              })
            }
          >
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'UZS'}>UZS</MenuItem>
            <MenuItem value={'RUB'}>RUB</MenuItem>
          </StyledSelect>
        </SearchLoadsFiltersBox>
        <SearchLoadsFilterButtonWrapper>
          <Button fullWidth type="button" onClick={handleSubmit}>
            Apply filters
          </Button>
          <Button onClick={clearFileds} fullWidth buttonType="secondary_dark">
            Clear filters
          </Button>
        </SearchLoadsFilterButtonWrapper>
      </SearchLoadsFilterInputsForm>
    </SearchLoadsFilterWrapper>
  );
};
export default SearchLoadsFilter;
