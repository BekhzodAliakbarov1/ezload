import Text from 'components/typography/text';
import React from 'react';
import LoadAddress from './load-action-parts/load-address/load-address';
import LoadTitle from './load-action-parts/load-title/load-title';
import { ActionLoadWrapper } from './load-action.styles';
import LoadDistination from './load-action-parts/load-distination/load-distinetion';
import LoadDateTime from './load-action-parts/load-date-time/load-date-time';
import LoadExtraInformation from './load-action-parts/load-extra-information/load-extra-information';
import LoadButtons from './load-action-parts/load-buttons/load-buttons';
import { useLocation } from 'react-router-dom';
import { SingleLoadInterface } from 'types/load.types';

interface StateType {
  type?: 'EDIT';
  data?: SingleLoadInterface;
}

const ActionLoad = () => {
  const location = useLocation().state as StateType;

  return (
    <ActionLoadWrapper>
      <Text weight="700">
        {location.type === 'EDIT' ? 'Edit  load' : 'Create new load'}
      </Text>
      <LoadTitle />
      <LoadAddress />
      <LoadDistination />
      <LoadDateTime />
      <LoadExtraInformation />
      <LoadButtons />
    </ActionLoadWrapper>
  );
};

export default ActionLoad;
