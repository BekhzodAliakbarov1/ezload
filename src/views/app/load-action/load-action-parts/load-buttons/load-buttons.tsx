import Button from 'components/button/button';
import { useData } from 'layouts/load-action-layout/load-action-layout.context';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateLoad, useEditLoad } from 'server-state/mutations/use-load';
import { LoadButtonsWrapper } from './load-buttons.styles';

const LoadButtons: React.FC<{ isEditing: boolean }> = ({ isEditing }) => {
  const navigate = useNavigate();
  const { data } = useData();
  const createLoadRequest = useCreateLoad();
  const editLoadRequest = useEditLoad();
  const handleSubmit = () => {
    const loadData = {
      description: data.description,
      destination: 1,
      earliest_delivery: data.dates.delivery.start,
      mobile: false,
      earliest_pick_up: data.dates.pickup.start,
      latest_delivery: data.dates.delivery.end,
      latest_pick_up: data.dates.pickup.end,
      pickup_point: 6,
      price: data.cost,
      title: data.load_title,
      web: true,
      weight: Number(data.lugage_size),
      id: data.id ?? '',
    };

    console.log(data);

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
        loading={createLoadRequest.isLoading || editLoadRequest.isLoading}
        fullWidth
        onClick={handleSubmit}
      >
        {isEditing ? 'Edit load' : 'Post load'}
      </Button>
      <Button buttonType="secondary_dark" fullWidth onClick={handleCancel}>
        Cancel
      </Button>
    </LoadButtonsWrapper>
  );
};

export default LoadButtons;
