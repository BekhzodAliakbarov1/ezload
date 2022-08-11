import Input from 'components/input/input';
import Text from 'components/typography/text';
import React, { useState } from 'react';
import {
  FilterMobileDrawerContainer,
  FilterMobileNavbar,
  SearchDriversFilterButtonsWrapper,
  SearchDriversFilterForm,
  SearchDriversFilterFromCountryWrapper,
  SearchDriversFilterToCountryWrapper,
  SearchDriversFilterWeightWrapper,
  SearchDriversFilterWrapper,
  StyledCloseButton,
} from './search-drivers-filter.styles';
import Rating from '@mui/material/Rating';
import FilledStarIcon from 'components/icons/filled-star.icon';
import Button from 'components/button/button';
import CountryInput from 'components/input/country-input';
import RegionInput from 'components/input/region-input';
import { emptyState, SearchDriverFilterType } from '..';
import { Drawer, IconButton } from '@mui/material';
import FilterIcon from 'components/icons/filter.icon';
import MenuCloseIcon from 'components/icons/menu-close.icon';

const SearchDriversFilter: React.FC<{
  handleClick: (data: SearchDriverFilterType) => void;
}> = ({ handleClick }) => {
  const [filterData, setFilterData] =
    useState<SearchDriverFilterType>(emptyState);

  const [state, setState] = useState(false);

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

  const toggleDrawer = (open: boolean) => () => {
    setState(open);
  };

  const onSubmit = () => {
    handleClick(filterData);
    toggleDrawer(false)();
  };
  const filteredJSX = () => (
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
        <Button
          type="button"
          onClick={clearFilter}
          fullWidth
          buttonType="secondary_dark"
        >
          Clear filters
        </Button>
      </SearchDriversFilterButtonsWrapper>
    </SearchDriversFilterForm>
  );
  return (
    <>
      <FilterMobileNavbar onClick={toggleDrawer(true)}>
        <IconButton>
          <FilterIcon />
        </IconButton>
        <Text>Filter</Text>
      </FilterMobileNavbar>
      <SearchDriversFilterWrapper>
        <Text weight="700">Filters</Text>
        {filteredJSX()}
      </SearchDriversFilterWrapper>
      <Drawer
        style={{
          zIndex: 5,
        }}
        sx={{
          '.MuiDrawer-root': {
            zIndex: '5',
          },
        }}
        anchor="left"
        open={state}
        onClose={toggleDrawer(false)}
      >
        <FilterMobileDrawerContainer>
          <StyledCloseButton onClick={toggleDrawer(false)}>
            <MenuCloseIcon />
          </StyledCloseButton>
          <Text weight="700">Filters</Text>
          {filteredJSX()}
        </FilterMobileDrawerContainer>
      </Drawer>
    </>
  );
};

export default SearchDriversFilter;
