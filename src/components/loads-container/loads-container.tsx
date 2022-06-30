import React from 'react';
import LoadCard from 'components/cards/single-load/load-card';
import { LoadsContainerBox } from './loads-container.styles';
import { SingleLoadResponse } from 'types/load.types';
import Button from 'components/button/button';

const LoadsContainer: React.FC<{
  loads: SingleLoadResponse[];
  hasNextPage?: boolean;
  clickable?: boolean;
  loadType: 'new' | 'on_the_way' | 'delivered';
}> = ({ loads, clickable, loadType, hasNextPage }) => {
  return (
    <LoadsContainerBox>
      {loads.map((load, index) => {
        return (
          <LoadCard
            loadType={loadType}
            clickable={clickable}
            key={index}
            load={load}
          />
        );
      })}
      {hasNextPage && (
        <Button fullWidth buttonType="secondary_dark">
          Load more
        </Button>
      )}
    </LoadsContainerBox>
  );
};

export default LoadsContainer;
