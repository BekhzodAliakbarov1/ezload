import Text from 'components/typography/text';
import React from 'react';
import LoadAddress from './load-action-parts/load-address/load-address';
import LoadTitle from './load-action-parts/load-title/load-title';
import { ActionLoadWrapper } from './load-action.styles';
import LoadDistination from './load-action-parts/load-distination/load-distinetion';
import LoadDateTime from './load-action-parts/load-date-time/load-date-time';
import LoadExtraInformation from './load-action-parts/load-extra-information/load-extra-information';
import LoadButtons from './load-action-parts/load-buttons/load-buttons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useData } from 'layouts/load-action-layout/load-action-layout.context';
import { useCreateLoad, useEditLoad } from 'server-state/mutations/use-load';
import { useCreateAddress } from 'server-state/mutations/use-address';
import { useTranslation } from 'react-i18next';

interface StateType {
  state: { type?: 'EDIT' };
}

const ActionLoad = () => {
  const { state } = useLocation() as StateType;
  const { data } = useData();
  const createLoadRequest = useCreateLoad();
  const editLoadRequest = useEditLoad();
  const createAddressRequest = useCreateAddress();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const createAddressFunction = async ({
    type,
  }: {
    type: 'pickup' | 'delivery';
  }) => {
    const result = await createAddressRequest.mutateAsync({
      country: Number(data[type].country.id),
      district: Number(data[type].district.id),
      location: {
        latitude: data[type].latLong.lat ?? 0,
        longitude: data[type].latLong.lng ?? 0,
      },
      orientation: `${data[type].address_1}`,
      postal_code: data[type].zip_code,
      region: Number(data[type].region.id),
      is_user_address: data[type].save_my_address,
    });
    return result.id;
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const pickup_point =
      (await data.pickup_route) ??
      (await createAddressFunction({ type: 'pickup' }));
    const destination =
      (await data.delivery_route) ??
      (await createAddressFunction({ type: 'delivery' }));

    if (destination && pickup_point) {
      console.log({ destination, pickup_point });

      const loadData = {
        description: data.description,
        destination: destination,
        earliest_delivery: data.dates.delivery.start,
        mobile: false,
        earliest_pick_up: data.dates.pickup.start,
        latest_delivery: data.dates.delivery.end,
        latest_pick_up: data.dates.pickup.end,
        pickup_point: pickup_point,
        price: data.cost,
        title: data.load_title,
        web: true,
        weight: Number(data.lugage_size),
        currency: data.currency_type,
        id: data.id ?? '',
      };
      if (data.id) {
        editLoadRequest.mutate(loadData, {
          onSuccess() {
            navigate(-1);
          },
        });
      } else {
        createLoadRequest.mutate(loadData, {
          onSuccess() {
            navigate('/profile/my-loads?name=new');
          },
        });
      }
    }
  };

  return (
    <ActionLoadWrapper onSubmit={submitHandler}>
      <Text weight="700">
        {state?.type === 'EDIT' ? t('Edit load') : t('Create new load')}
      </Text>
      <LoadTitle />
      <LoadAddress />
      <LoadDistination />
      <LoadDateTime isEditing={state?.type === 'EDIT'} />
      <LoadExtraInformation />
      <LoadButtons
        isEditing={state?.type === 'EDIT'}
        isLoading={
          createLoadRequest.isLoading ||
          editLoadRequest.isLoading ||
          createAddressRequest.isLoading
        }
      />
    </ActionLoadWrapper>
  );
};

export default ActionLoad;
