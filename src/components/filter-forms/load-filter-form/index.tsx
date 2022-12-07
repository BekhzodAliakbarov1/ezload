import { MenuItem } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import Button from 'components/button/button';
import CountryInput from 'components/input/country-input';
import Input from 'components/input/input';
import RegionInput from 'components/input/region-input';
import Text from 'components/typography/text';
import React, { useState } from 'react';
import { SearchLoadFilterType } from 'views/app/search-loads';
import { emptyState } from './load-filter-state';
import {
  SearchLoadsFilterButtonWrapper,
  SearchLoadsFilterInputsWrapper,
  SearchLoadsFiltersBox,
  StyledSelect,
  StyledTextFiled,
} from './load-filter-form.styles';
import { useTranslation } from 'react-i18next';

const LoadFiterForm: React.FC<{
  submitHandler: (data: SearchLoadFilterType) => void;
}> = ({ submitHandler }) => {
  const { t } = useTranslation();
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
      | 'destination_country'
      | 'destination_region';
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
      [type]: newValue?.toLocaleDateString(
        localStorage.getItem('language') ?? 'en'
      ),
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
    submitHandler(filterData);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <SearchLoadsFilterInputsWrapper>
      <SearchLoadsFiltersBox>
        <Text color="main_90">{t('Pickup location')}</Text>
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
        <Text color="main_90">{t('Delivery location')}</Text>
        <CountryInput
          value={filterData.destination_country?.title ?? ''}
          selectHanlder={({ id, title }) =>
            handleLocationChange({
              id,
              title,
              type: 'destination_country',
            })
          }
        />
        <RegionInput
          country={filterData.destination_country?.title ?? ''}
          value={filterData.destination_region?.title ?? ''}
          selectHanlder={({ id, title }) =>
            handleLocationChange({
              id,
              title,
              type: 'destination_region',
            })
          }
        />
      </SearchLoadsFiltersBox>
      <SearchLoadsFiltersBox>
        <Text color="main_90">{t('Pickup date')}</Text>
        <DatePicker
          value={
            filterData.pickup_date ? new Date(filterData.pickup_date) : null
          }
          onChange={(e) => handleDateChange(e, 'pickup_date')}
          renderInput={(params) => <StyledTextFiled {...params} />}
          disableMaskedInput
          // inputFormat="d-MMMM , HH:mm "
          disablePast
        />
      </SearchLoadsFiltersBox>
      <SearchLoadsFiltersBox>
        <Text color="main_90">{t('Delivery date')}</Text>
        <DatePicker
          value={
            filterData.deliver_date ? new Date(filterData.deliver_date) : null
          }
          onChange={(e) => handleDateChange(e, 'deliver_date')}
          renderInput={(params) => <StyledTextFiled {...params} />}
          disableMaskedInput
          // inputFormat="d-MMMM , HH:mm "
          disablePast
          minDate={new Date(filterData.pickup_date ?? '')}
        />
      </SearchLoadsFiltersBox>
      <SearchLoadsFiltersBox>
        <Text color="main_90">{t('Weight (in tonnes)')}</Text>
        <Input
          value={filterData.weight ?? ''}
          onChange={(e) => handleWeightChange(e.target.value)}
          placeholder="e.g 500 "
        />
      </SearchLoadsFiltersBox>
      <SearchLoadsFiltersBox>
        <Text color="main_90">{`${t('Budget')} (${filterData.currency})`}</Text>
        <Input
          onChange={(e) => handlePriceChange(e.target.value, 'price_from')}
          value={filterData.price_from ?? ''}
          placeholder={`${t('From')} (e.g 500)`}
        />
        <Input
          onChange={(e) => handlePriceChange(e.target.value, 'price_to')}
          value={filterData.price_to ?? ''}
          placeholder={`${t('To')} (e.g 500)`}
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
          {t('Apply filters')}
        </Button>
        <Button onClick={clearFileds} fullWidth buttonType="secondary_dark">
          {t('Clear filters')}
        </Button>
      </SearchLoadsFilterButtonWrapper>
    </SearchLoadsFilterInputsWrapper>
  );
};

export default LoadFiterForm;
