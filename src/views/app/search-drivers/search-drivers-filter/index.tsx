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

const SearchDriversFilter = () => {
  const [rating, setRating] = useState(1);
  return (
    <SearchDriversFilterWrapper>
      <Text weight="700">Filters</Text>
      <SearchDriversFilterForm>
        <Text weight="600">From</Text>
        <SearchDriversFilterFromCountryWrapper>
          <Input placeholder="Country" />
          <Input placeholder="Region" />
        </SearchDriversFilterFromCountryWrapper>
        <Text weight="600">To</Text>
        <SearchDriversFilterToCountryWrapper>
          <Input placeholder="Country" />
          <Input placeholder="Region" />
        </SearchDriversFilterToCountryWrapper>
        <Text weight="600">Weight (in tonnes)</Text>
        <SearchDriversFilterWeightWrapper>
          <Input placeholder="e.g 500 " />
        </SearchDriversFilterWeightWrapper>
        <Text>Driver’s rating</Text>
        <Rating
          value={rating}
          onChange={(e, newValue) => setRating(newValue ?? rating)}
          icon={<FilledStarIcon size="40" fill="#76CBB4" />}
          emptyIcon={<FilledStarIcon size="40" fill="#EBF8F4" />}
        />
        <SearchDriversFilterButtonsWrapper>
          <Button fullWidth>Apply filters</Button>
          <Button fullWidth buttonType="secondary_dark">
            Clear filters
          </Button>
        </SearchDriversFilterButtonsWrapper>
      </SearchDriversFilterForm>
    </SearchDriversFilterWrapper>
  );
};

export default SearchDriversFilter;
