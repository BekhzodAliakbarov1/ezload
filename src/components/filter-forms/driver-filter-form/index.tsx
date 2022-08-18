import { Rating } from '@mui/material';
import Button from 'components/button/button';
import FilledStarIcon from 'components/icons/filled-star.icon';
import CountryInput from 'components/input/country-input';
import Input from 'components/input/input';
import RegionInput from 'components/input/region-input';
import Text from 'components/typography/text';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchDriverFilterType } from 'views/app/search-drivers';
import {
  SearchDriversFilterButtonsWrapper,
  SearchDriversFilterForm,
  SearchDriversFilterFromCountryWrapper,
  SearchDriversFilterToCountryWrapper,
  SearchDriversFilterWeightWrapper,
} from './driver-filter-form.styles';
import { emptyState } from './driver-filter-state';

const DriverFilterForm: React.FC<{
  submitHandler: (data: SearchDriverFilterType) => void;
}> = ({ submitHandler }) => {
  const { t } = useTranslation();
  const [filterData, setFilterData] =
    useState<SearchDriverFilterType>(emptyState);

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
  const handlWeightChange = (weight: string) => {
    setFilterData({ ...filterData, weight });
  };
  const clearFilter = () => {
    setFilterData(emptyState);
  };

  const onSubmit = () => {
    submitHandler(filterData);
  };

  return (
    <SearchDriversFilterForm>
      <Text weight="600">{t('From')}</Text>
      <SearchDriversFilterFromCountryWrapper>
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
      </SearchDriversFilterFromCountryWrapper>
      <Text weight="600">{t('To')}</Text>
      <SearchDriversFilterToCountryWrapper>
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
      </SearchDriversFilterToCountryWrapper>
      <Text weight="600">{t('Weight (in tonnes)')}</Text>
      <SearchDriversFilterWeightWrapper>
        <Input
          value={filterData.weight}
          onChange={(e) => handlWeightChange(e.target.value)}
          placeholder="e.g 500 "
        />
      </SearchDriversFilterWeightWrapper>
      <Text>{t('Driver’s rating')}</Text>
      <Rating
        value={filterData.rating}
        onChange={(e, rating) =>
          setFilterData({ ...filterData, rating: rating ?? 1 })
        }
        icon={<FilledStarIcon size="40" fill="#76CBB4" />}
        emptyIcon={<FilledStarIcon size="40" fill="#EBF8F4" />}
      />
      <SearchDriversFilterButtonsWrapper>
        <Button
          aria-label="apply filter"
          type="button"
          onClick={onSubmit}
          fullWidth
        >
          {t('Apply filters')}
        </Button>
        <Button
          type="button"
          aria-label="clear filters"
          onClick={clearFilter}
          fullWidth
          buttonType="secondary_dark"
        >
          {t('Clear filters')}
        </Button>
      </SearchDriversFilterButtonsWrapper>
    </SearchDriversFilterForm>
  );
};

export default DriverFilterForm;
