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
import { SingleLoadResponse } from 'types/load.types';
import { useData } from 'layouts/load-action-layout/load-action-layout.context';
import { stat } from 'fs';

interface StateType {
  state: { type?: 'EDIT'; data?: SingleLoadResponse };
}

const ActionLoad = () => {
  const { setValues, data } = useData();
  const { state } = useLocation() as StateType;
  //  if load is editing run next row
  useEffect(() => {
    if (state?.type === 'EDIT') {
      // will set edited data of load
      setValues({
        ...data,
        load_title: '',
        pickup: {
          addresline_1: '',
          addresline_2: '',
          street: state.data?.pickup_point.district,
          region: state.data?.pickup_point.region,
          country: state.data?.pickup_point.country,
          zipcode: '',
        },
        delivery: {
          addresline_1: '',
          addresline_2: '',
          street: state.data?.destination.district,
          region: state.data?.destination.region,
          country: state.data?.destination.country,
          zipcode: '',
        },
        dates: {
          pickup: {
            start: new Date(`${state.data?.earliest_pick_up}`),
            end: new Date(`${state.data?.latest_pick_up}`),
          },
          delivery: {
            start: new Date(`${state.data?.earliest_delivery}`),
            end: new Date(`${state.data?.latest_delivery}`),
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
