import Button from 'components/button/button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { LoadButtonsWrapper } from './load-buttons.styles';

const LoadButtons: React.FC<{ isEditing: boolean; isLoading: boolean }> = ({
  isEditing,
  isLoading,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
        {isEditing ? t('Edit load') : t('Post load')}
      </Button>
      <Button
        aria-label="cencel"
        buttonType="secondary_dark"
        fullWidth
        onClick={handleCancel}
      >
        {t('Cancel')}
      </Button>
    </LoadButtonsWrapper>
  );
};

export default LoadButtons;
