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
import { useTranslation } from 'react-i18next';

const LoadsContainer: React.FC<{
  loads?: SingleLoadResponse[];
  hasNextPage?: boolean;
  clickable?: boolean;
  status: 1 | 2 | 3;
  withButton?: boolean;
  fetchNextPage?: () => void;
}> = ({
  loads = [],
  clickable,
  hasNextPage,
  status,
  withButton,
  fetchNextPage,
}) => {
  const { t } = useTranslation();

  return (
    <LoadsContainerBox>
      {loads.length > 0 ? (
        loads.map((load, index) => {
          return (
            <LoadCard
              clickable={clickable}
              key={index}
              load={load}
              withButtons={withButton}
              status={status}
            />
          );
        })
      ) : (
        <NoLoadsFindSection>
          <FileIcon size="150" />
          <Text>{t('No loads yet')}</Text>
        </NoLoadsFindSection>
      )}
    </LoadsContainerBox>
  );
};

export default LoadsContainer;
