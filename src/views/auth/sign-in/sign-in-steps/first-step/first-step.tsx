import Text from 'components/typography/text';
import React, { useState } from 'react';
import {
  CreatorSignInFirstStepWrapper,
  ErrorMessageData,
  ErrorMessageWrapper,
  FirstStepDataWrapper,
  LineDiv,
  PhoneNumberWrapper,
} from './first-step.styles';
import Button from 'components/button/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import InfoIcon from 'components/icons/info.icon';
import { useSteps } from 'global-state/step/step-context';
import PhoneInput from 'components/phone-input/phone-input';
import Input from 'components/input/input';
import { useVerification } from 'server-state/mutations/use-verification';
import { useTranslation } from 'react-i18next';

const PHONE_NUMBER_REGEX =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

type Inputs = {
  phone_num: string;
};

const FirstStep: React.FC<{ setPhoneNumber: (data: string) => void }> = ({
  setPhoneNumber,
}) => {
  const [countryCode, setCountryCode] = useState('+998');
  const { nextStep } = useSteps();
  const { mutate, isLoading } = useVerification();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { t } = useTranslation();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(
      { phone_number: `${countryCode}${data.phone_num}`.substring(1) },
      {
        onSuccess() {
          setPhoneNumber(`${countryCode}${data.phone_num}`.substring(1));
          nextStep();
        },
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value);
  };

  return (
    <CreatorSignInFirstStepWrapper>
      {errors.phone_num && (
        <ErrorMessageWrapper>
          <ErrorMessageData>
            <InfoIcon />
            <p>
              {errors.phone_num.type === 'pattern' && t('Invalid Phone Number')}
              {errors.phone_num.type === 'required' && t('Please enter Number')}
            </p>
          </ErrorMessageData>
        </ErrorMessageWrapper>
      )}
      <FirstStepDataWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Text size="lg" weight="800">
            {t('Login')}
          </Text>
          <PhoneNumberWrapper>
            <PhoneInput value={countryCode} setValue={handleChange}>
              <Input
                placeholder={t('Enter your phone number')}
                {...register('phone_num', {
                  required: true,
                  pattern: PHONE_NUMBER_REGEX,
                })}
              />
            </PhoneInput>
          </PhoneNumberWrapper>
          <Button loading={isLoading} type="submit" fullWidth>
            {t('Sign in')}
          </Button>
          <LineDiv />
          <Text size="md" weight="500">
            {t('By clicking on the button I agree the')}{' '}
            <span>{t('Terms & Conditions')}</span>.
          </Text>
        </form>
      </FirstStepDataWrapper>
    </CreatorSignInFirstStepWrapper>
  );
};

export default FirstStep;
