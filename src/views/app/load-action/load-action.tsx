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
import { SingleLoadInterface } from 'types/load.types';
import { useData } from 'layouts/load-action-layout/load-action-layout.context';

interface StateType {
  state: { type?: 'EDIT'; data?: SingleLoadInterface };
}

const ActionLoad = () => {
  const { setValues, data } = useData();
  const { state } = useLocation() as StateType;
  useEffect(() => {
    if (state?.type === 'EDIT') {
      // will set edited data of load
      setValues({
        ...data,
        load_title: '',
        pickup: {
          addresline_1: state.data?.pickup_address,
          addresline_2: '',
          street: '',
          region: '',
          country: state.data?.pickup_country,
          zipcode: '',
        },
        delivery: {
          addresline_1: state.data?.deliver_address,
          addresline_2: '',
          street: '',
          region: '',
          country: state.data?.deliver_country,
          zipcode: '',
        },
        dates: {
          pickup: {
            start: state.data?.pickup_date,
            end: state.data?.pickup_date,
          },
          delivery: {
            start: state.data?.deliver_date,
            end: state.data?.deliver_date,
          },
        },
        lugage_size: '',
        cost: '',
        currency_type: '',
        description: '',
        id: state.data?.id,
      });
    }
  }, []);

  return (
    <ActionLoadWrapper>
      <Text weight="700">
        {state?.type === 'EDIT' ? 'Edit  load' : 'Create new load'}
      </Text>
      <LoadTitle />
      <LoadAddress />
      <LoadDistination />
      <LoadDateTime />
      <LoadExtraInformation />
      <LoadButtons isEditing={state?.type === 'EDIT'} />
    </ActionLoadWrapper>
  );
};

export default ActionLoad;
