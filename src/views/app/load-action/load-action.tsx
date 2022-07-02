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
  state: { type?: 'EDIT'; data?: SingleLoadDetailsResponse };
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
        load_title: state.data?.title,
        pickup: {
          addresline_1: '',
          addresline_2: '',
          district: state.data?.pickup_point.district.title,
          region: state.data?.pickup_point.region.title,
          country: state.data?.pickup_point.country.title,
          zipcode: '',
        },
        delivery: {
          addresline_1: '',
          addresline_2: '',
          district: state.data?.destination.district.title,
          region: state.data?.destination.region.title,
          country: state.data?.destination.country.title,
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
        lugage_size: state.data?.weight,
        cost: state.data?.price,
        currency_type: 'USD',
        description: state.data?.description,
        id: state.data?.id,
      });
    }
  }, [state.data?.id]);

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
