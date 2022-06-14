import React from 'react';
import LoadCard from 'components/cards/single-load/load-card';
import { LoadsContainerBox } from './loads-container.styles';
import { SingleLoadInterface } from 'types/load.types';

const LoadsContainer: React.FC<{
  loads: SingleLoadInterface[];
}> = ({ loads }) => {
  return (
    <LoadsContainerBox>
      {loads.map((load) => {
        return <LoadCard key={load.id} {...load} />;
      })}
    </LoadsContainerBox>
  );
};

export default LoadsContainer;
