import Button from 'components/button/button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadButtonsWrapper } from './load-buttons.styles';

const LoadButtons: React.FC<{ isEditing: boolean; isLoading: boolean }> = ({
  isEditing,
  isLoading,
}) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    if (isEditing) {
      navigate('/profile/my-loads');
    } else {
      navigate('/');
    }
  };
  return (
    <LoadButtonsWrapper>
      <Button type="submit" aria-label="edit " loading={isLoading} fullWidth>
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
