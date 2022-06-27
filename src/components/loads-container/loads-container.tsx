import React from 'react';
import LoadCard from 'components/cards/single-load/load-card';
import { LoadsContainerBox } from './loads-container.styles';
import { SingleLoadInterface } from 'types/load.types';
import Button from 'components/button/button';

const LoadsContainer: React.FC<{
  loads: SingleLoadInterface[];
  clickable?: boolean;
  loadType: 'new' | 'on_the_way' | 'delivered';
}> = ({ loads, clickable, loadType }) => {
  return (
    <LoadsContainerBox>
      {loads.map((load) => {
        return (
          <LoadCard
            loadType={loadType}
            clickable={clickable}
            key={load.id}
            {...load}
          />
        );
      })}
      <Button fullWidth buttonType="secondary_dark">
        Load more
      </Button>
    </LoadsContainerBox>
  );
};

export default LoadsContainer;
