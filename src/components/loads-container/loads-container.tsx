import React from 'react';
import LoadCard from 'components/cards/single-load/load-card';
import {
  LoadsContainerBox,
  NoLoadsFindSection,
} from './loads-container.styles';
import { SingleLoadResponse } from 'types/load.types';
import Button from 'components/button/button';
import FileIcon from 'components/icons/file.icon';
import Text from 'components/typography/text';

const LoadsContainer: React.FC<{
  loads: SingleLoadResponse[];
  hasNextPage?: boolean;
  clickable?: boolean;
  loadType: 'new' | 'on_the_way' | 'delivered';
}> = ({ loads, clickable, loadType, hasNextPage }) => {
  return (
    <LoadsContainerBox>
      {loads.length > 0 ? (
        loads.map((load, index) => {
          return (
            <LoadCard
              loadType={loadType}
              clickable={clickable}
              key={index}
              load={load}
            />
          );
        })
      ) : (
        <NoLoadsFindSection>
          <FileIcon size="150" />
          <Text>No Loads</Text>
        </NoLoadsFindSection>
      )}
      {hasNextPage && (
        <Button fullWidth buttonType="secondary_dark">
          Load more
        </Button>
      )}
    </LoadsContainerBox>
  );
};

export default LoadsContainer;
