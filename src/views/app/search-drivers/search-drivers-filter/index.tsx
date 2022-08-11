import Input from 'components/input/input';
import Text from 'components/typography/text';
import React, { useState } from 'react';
import {
  SearchDriversFilterButtonsWrapper,
  SearchDriversFilterForm,
  SearchDriversFilterFromCountryWrapper,
  SearchDriversFilterToCountryWrapper,
  SearchDriversFilterWeightWrapper,
  SearchDriversFilterWrapper,
} from './search-drivers-filter.styles';
import Rating from '@mui/material/Rating';
import FilledStarIcon from 'components/icons/filled-star.icon';
import Button from 'components/button/button';
import CountryInput from 'components/input/country-input';
import RegionInput from 'components/input/region-input';
import { emptyState, SearchDriverFilterType } from '..';

const SearchDriversFilter: React.FC<{
  handleClick: (data: SearchDriverFilterType) => void;
}> = ({ handleClick }) => {
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
    handleClick(filterData);
  };

  return (
    <SearchDriversFilterWrapper>
      <Text weight="700">Filters</Text>
      <SearchDriversFilterForm>
        <Text weight="600">From</Text>
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
        <Text weight="600">To</Text>
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
        <Text weight="600">Weight (in tonnes)</Text>
        <SearchDriversFilterWeightWrapper>
          <Input
            value={filterData.weight}
            onChange={(e) => handlWeightChange(e.target.value)}
            placeholder="e.g 500 "
          />
        </SearchDriversFilterWeightWrapper>
        <Text>Driver’s rating</Text>
        <Rating
          value={filterData.rating}
          onChange={(e, rating) =>
            setFilterData({ ...filterData, rating: rating ?? 1 })
          }
          icon={<FilledStarIcon size="40" fill="#76CBB4" />}
          emptyIcon={<FilledStarIcon size="40" fill="#EBF8F4" />}
        />
        <SearchDriversFilterButtonsWrapper>
          <Button type="button" onClick={onSubmit} fullWidth>
            Apply filters
          </Button>
          <Button onClick={clearFilter} fullWidth buttonType="secondary_dark">
            Clear filters
          </Button>
        </SearchDriversFilterButtonsWrapper>
      </SearchDriversFilterForm>
    </SearchDriversFilterWrapper>
  );
};

export default SearchDriversFilter;
