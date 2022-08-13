import React from 'react';
import { SearchDriverFilterType } from '..';
import FilterPageComponent from 'components/filter-page-component';
import { useDrawer } from 'hooks/use-drawer';
import DriverFilterForm from 'components/filter-forms/driver-filter-form';

const SearchDriversFilter: React.FC<{
  handleClick: (data: SearchDriverFilterType) => void;
}> = ({ handleClick }) => {
  const { closeDrawer, isOpen, openDrawer } = useDrawer();

  const onSubmit = (data: SearchDriverFilterType) => {
    handleClick(data);
    closeDrawer();
  };

  return (
    <FilterPageComponent
      closeDrawer={closeDrawer}
      isOpen={isOpen}
      openDrawer={openDrawer}
    >
      <DriverFilterForm submitHandler={onSubmit} />
    </FilterPageComponent>
  );
};

export default SearchDriversFilter;
