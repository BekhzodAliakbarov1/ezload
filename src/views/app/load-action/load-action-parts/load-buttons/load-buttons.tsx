import Button from 'components/button/button';
import { useData } from 'layouts/load-action-layout/load-action-layout.context';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadButtonsWrapper } from './load-buttons.styles';

const LoadButtons: React.FC<{ isEditing: boolean }> = ({ isEditing }) => {
  const navigate = useNavigate();
  const { data } = useData();
  const handleSubmit = () => {
    if (data.id) {
      // this is for editing load
    } else {
      // this is for creating load
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
      <Button fullWidth onClick={handleSubmit}>
        {isEditing ? 'Edit load' : 'Post load'}
      </Button>
      <Button buttonType="secondary_dark" fullWidth onClick={handleCancel}>
        Cancel
      </Button>
    </LoadButtonsWrapper>
  );
};

export default LoadButtons;
