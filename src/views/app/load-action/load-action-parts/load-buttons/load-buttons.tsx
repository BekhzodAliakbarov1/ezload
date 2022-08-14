import Button from 'components/button/button';
import { useData } from 'layouts/load-action-layout/load-action-layout.context';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateAddress } from 'server-state/mutations/use-address';
import { useCreateLoad, useEditLoad } from 'server-state/mutations/use-load';
import { LoadButtonsWrapper } from './load-buttons.styles';

const LoadButtons: React.FC<{ isEditing: boolean }> = ({ isEditing }) => {
  const navigate = useNavigate();
  const { data } = useData();
  const createLoadRequest = useCreateLoad();
  const editLoadRequest = useEditLoad();
  const createAddressRequest = useCreateAddress();

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
      is_user_address: false, // after checkbox connected fix it
    });
    return result.id;
  };

  const handleSubmit = async () => {
    const pickup_point = await createAddressFunction({ type: 'pickup' });
    const destination = await createAddressFunction({ type: 'delivery' });

    if (destination && pickup_point) {
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
            navigate('/profile/my-loads');
          },
        });
      }
    }
  };

  const handleCancel = () => {
    if (data.id) {
      navigate('/profile/my-loads');
    } else {
      navigate('/');
    }
  };
  return (
    <LoadButtonsWrapper>
      <Button
        aria-label="edit "
        loading={
          createLoadRequest.isLoading ||
          editLoadRequest.isLoading ||
          createAddressRequest.isLoading
        }
        fullWidth
        onClick={handleSubmit}
      >
        {isEditing ? 'Edit load' : 'Post load'}
      </Button>
      <Button
        aria-label="cencel"
        buttonType="secondary_dark"
        fullWidth
        onClick={handleCancel}
      >
        Cancel
      </Button>
    </LoadButtonsWrapper>
  );
};

export default LoadButtons;
