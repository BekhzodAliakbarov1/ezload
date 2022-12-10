import Button from 'components/button/button';
import { useSteps } from 'global-state/step/step-context';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFillAccount } from 'server-state/mutations/use-fill-account';
import {
  CheckUserTypeBox,
  CheckUserTypeWrapper,
  LoginStyledButton,
} from './check-user-type.styles';

const CheckUserType: React.FC<{
  token: string;
  setUserType: (type: 'customer' | 'driver') => void;
}> = ({ token, setUserType }) => {
  const { t } = useTranslation();
  const { mutate } = useFillAccount(token);
  const { nextStep } = useSteps();

  const changeHandler = (type: 'customer' | 'driver') => {
    mutate(
      {
        first_name: type,
        is_driver: type === 'driver',
        is_broker: type === 'customer',
      },
      {
        onSuccess() {
          localStorage.setItem('userType', type);
          setUserType(type);
          nextStep();
        },
      }
    );
  };

  return (
    <CheckUserTypeWrapper>
      <CheckUserTypeBox>
        {/* <Text weight="800">{t('Login')}</Text> */}
        <LoginStyledButton fullWidth onClick={() => changeHandler('customer')}>
          {t('As a Customer')}
        </LoginStyledButton>
        <Button fullWidth onClick={() => changeHandler('driver')}>
          {t('As a Driver')}
        </Button>
      </CheckUserTypeBox>
    </CheckUserTypeWrapper>
  );
};

export default CheckUserType;
