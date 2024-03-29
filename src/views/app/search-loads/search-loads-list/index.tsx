import LoadsContainer from 'components/loads-container/loads-container';
import LoadsContainerSkeloton from 'components/skelotons/loads-container';
import Text from 'components/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SingleLoadResponse } from 'types/load.types';
import { SearchLoadsListWrapper } from './search-loads-list.styles';

const SearchLoadsList: React.FC<{ data?: SingleLoadResponse[] }> = ({
  data,
}) => {
  const { t } = useTranslation();

  return (
    <SearchLoadsListWrapper>
      <Text weight="700">{t('LOADS')}</Text>
      {data ? (
        <LoadsContainer status={1} clickable loads={data} />
      ) : (
        <LoadsContainerSkeloton />
      )}
    </SearchLoadsListWrapper>
  );
};

export default SearchLoadsList;
