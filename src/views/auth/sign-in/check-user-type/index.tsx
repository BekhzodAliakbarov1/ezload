import Button from 'components/button/button';
import Text from 'components/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  CheckUserTypeBox,
  CheckUserTypeWrapper,
  LoginStyledButton,
} from './check-user-type.styles';

const CheckUserType: React.FC<{
  onChange: (val: 'customer' | 'driver' | '') => void;
}> = ({ onChange }) => {
  const { t } = useTranslation();
  return (
    <CheckUserTypeWrapper>
      <CheckUserTypeBox>
        <Text weight="800">{t('Login')}</Text>
        <LoginStyledButton fullWidth onClick={() => onChange('customer')}>
          {t('As a Customer')}
        </LoginStyledButton>
        <Button fullWidth onClick={() => onChange('driver')}>
          {t('As a Driver')}
        </Button>
      </CheckUserTypeBox>
    </CheckUserTypeWrapper>
  );
};

export default CheckUserType;
