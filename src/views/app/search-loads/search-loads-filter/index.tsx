import LoadFiterForm from 'components/filter-forms/load-filter-form';
import FilterPageComponent from 'components/filter-page-component';
import { useDrawer } from 'hooks/use-drawer';
import React from 'react';
import { SearchLoadFilterType } from '..';

const SearchLoadsFilter: React.FC<{
  handleClick: (data: SearchLoadFilterType) => void;
}> = ({ handleClick }) => {
  const { closeDrawer, isOpen, openDrawer } = useDrawer();

  const onSubmit = (data: SearchLoadFilterType) => {
    handleClick(data);
    closeDrawer();
  };

  return (
    <FilterPageComponent
      closeDrawer={closeDrawer}
      isOpen={isOpen}
      openDrawer={openDrawer}
    >
      <LoadFiterForm submitHandler={onSubmit} />
    </FilterPageComponent>
  );
};
export default SearchLoadsFilter;
