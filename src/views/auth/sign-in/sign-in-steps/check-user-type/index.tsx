import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Button from 'components/button/button';
import Input from 'components/input/input';
import Text from 'components/typography/text';
import { useSteps } from 'global-state/step/step-context';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFillAccount } from 'server-state/mutations/use-fill-account';
import {
  CheckUserTypeBox,
  CheckUserTypeWrapper,
} from './check-user-type.styles';

const CheckUserType: React.FC<{
  token: string;
  setUserType: (type: string) => void;
  setUserName: (type: string) => void;
  handleLogin: () => void;
}> = ({ token, setUserType, handleLogin, setUserName }) => {
  const { t } = useTranslation();
  const { mutate } = useFillAccount(token);
  const { nextStep } = useSteps();
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  // const changeHandler = (type: 'customer' | 'driver') => {
  //   mutate(
  //     {
  //       first_name: type,
  //       is_driver: type === 'driver',
  //       is_broker: type === 'customer',
  //     },
  //     {
  //       onSuccess() {
  //         localStorage.setItem('userType', type);
  //         setUserType(type);
  //         nextStep();
  //       },
  //     }
  //   );
  // };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutate(
      { first_name: name, is_broker: true, is_driver: false },
      {
        onSuccess() {
          if (type === 'customer') {
            handleLogin();
          } else {
            setUserName(name);
            nextStep();
          }
        },
      }
    );
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserType(event.target.value);
    setType(event.target.value);
  };

  return (
    <CheckUserTypeWrapper>
      <CheckUserTypeBox onSubmit={submitHandler}>
        <Text weight="800">{t('You are new ')}</Text>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t('Write your name')}
        />

        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          style={{ margin: '41px 0px' }}
          onChange={handleChange}
          value={type}
        >
          <FormControlLabel
            color="#213A44"
            value="driver"
            control={<Radio style={{ color: '#4FBC9F' }} />}
            label={t('I am a driver')}
          />
          <FormControlLabel
            value="customer"
            control={<Radio style={{ color: '#4FBC9F' }} />}
            label={t('I am a customer')}
          />
        </RadioGroup>
        <Button disabled={!name} fullWidth>
          {t('Continue')}
        </Button>
      </CheckUserTypeBox>
    </CheckUserTypeWrapper>
  );
};

export default CheckUserType;
