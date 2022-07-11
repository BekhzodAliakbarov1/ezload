import Button from 'components/button/button';
import Text from 'components/typography/text';
import React from 'react';
import {
  CheckUserTypeBox,
  CheckUserTypeWrapper,
  LoginStyledButton,
} from './check-user-type.styles';

const CheckUserType: React.FC<{
  onChange: (val: 'customer' | 'driver' | '') => void;
}> = ({ onChange }) => {
  return (
    <CheckUserTypeWrapper>
      <CheckUserTypeBox>
        <Text weight="800">Login</Text>
        <LoginStyledButton fullWidth onClick={() => onChange('customer')}>
          As a Customer
        </LoginStyledButton>
        <Button fullWidth onClick={() => onChange('driver')}>
          As a Driver
        </Button>
      </CheckUserTypeBox>
    </CheckUserTypeWrapper>
  );
};

export default CheckUserType;
