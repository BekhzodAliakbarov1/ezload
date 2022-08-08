import LoadsContainer from 'components/loads-container/loads-container';
import Text from 'components/typography/text';
import React from 'react';
import { SingleLoadResponse } from 'types/load.types';
import { SearchLoadsListWrapper } from './search-loads-list.styles';

const SearchLoadsList: React.FC<{ data?: SingleLoadResponse[] }> = ({
  data,
}) => {
  return (
    <SearchLoadsListWrapper>
      <Text weight="700">Loads</Text>
      <LoadsContainer clickable loads={data} />
    </SearchLoadsListWrapper>
  );
};

export default SearchLoadsList;
