import Text from 'components/typography/text';
import React, { useEffect } from 'react';
import LoadAddress from './load-action-parts/load-address/load-address';
import LoadTitle from './load-action-parts/load-title/load-title';
import { ActionLoadWrapper } from './load-action.styles';
import LoadDistination from './load-action-parts/load-distination/load-distinetion';
import LoadDateTime from './load-action-parts/load-date-time/load-date-time';
import LoadExtraInformation from './load-action-parts/load-extra-information/load-extra-information';
import LoadButtons from './load-action-parts/load-buttons/load-buttons';
import { useLocation } from 'react-router-dom';
import { SingleLoadDetailsResponse } from 'types/load.types';
import { useData } from 'layouts/load-action-layout/load-action-layout.context';

interface StateType {
  state: { type?: 'EDIT' };
}

const ActionLoad = () => {
  const { state } = useLocation() as StateType;

  return (
    <ActionLoadWrapper>
      <Text weight="700">
        {state?.type === 'EDIT' ? 'Edit  load' : 'Create new load'}
      </Text>
      <LoadTitle />
      <LoadAddress />
      <LoadDistination />
      <LoadDateTime isEditing={state?.type === 'EDIT'} />
      <LoadExtraInformation />
      <LoadButtons isEditing={state?.type === 'EDIT'} />
    </ActionLoadWrapper>
  );
};

export default ActionLoad;
