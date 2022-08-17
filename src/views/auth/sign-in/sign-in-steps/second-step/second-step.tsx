import Button from 'components/button/button';
import InfoIcon from 'components/icons/info.icon';
import Text from 'components/typography/text';
import React, { useState } from 'react';
import {
  ConfirmCodeWrapper,
  CreatorSignInSecondStepWrapper,
  ErrorMessageData,
  ErrorMessageWrapper,
  SecondStepDataWrapper,
} from './second-step.styles';
import { useForm } from 'react-hook-form';
import { useSteps } from 'global-state/step/step-context';
import ReactCodeInputComponent from 'components/code-input/react-code-input';
import { useLogin } from 'server-state/mutations/use-login';
import { useAuth } from 'global-state/auth/auth.state';
import { useVerification } from 'server-state/mutations/use-verification';
import { useTranslation } from 'react-i18next';

const SecondStep: React.FC<{
  phone_number: string;
  userType: 'customer' | 'driver';
  saveTokenAndId: (accessToken: string, user_id: string) => void;
}> = ({ phone_number, userType, saveTokenAndId }) => {
  const { t } = useTranslation();
  const [hasError, setHasError] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const { handleSubmit } = useForm();
  const { nextStep } = useSteps();
  const loginRequest = useLogin();
  const verificationRequest = useVerification();
  const { login } = useAuth();

  const sendCodeAgain = () => {
    verificationRequest.mutate({ phone_number });
  };

  const onSubmit = () => {
    loginRequest.mutate(
      {
        code: verificationCode,
        is_broker: userType === 'customer',
        is_driver: userType === 'driver',
        phone_number,
      },
      {
        onSuccess(res) {
          if (res.is_new_user) {
            saveTokenAndId(res.token, res.id);
            nextStep();
          } else {
            login({
              tokens: { access: res.token, refresh: '12' },
              userId: res.id,
              userType,
            });
          }
        },
        onError() {
          setHasError(true);
        },
      }
    );
  };

  return (
    <CreatorSignInSecondStepWrapper>
      {hasError && (
        <ErrorMessageWrapper>
          <ErrorMessageData>
            <InfoIcon />
            <p>Sorry, this mobile not registered</p>
          </ErrorMessageData>
        </ErrorMessageWrapper>
      )}
      <SecondStepDataWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Text size="lg" weight="800">
            {t('Great! Just one step')}
          </Text>
          <Text size="sm" weight="500">
            {t('We just sent a code to your phone')} +{phone_number}
          </Text>
          <ConfirmCodeWrapper error={hasError}>
            <ReactCodeInputComponent size="lg" setCode={setVerificationCode} />
          </ConfirmCodeWrapper>
          <Button loading={loginRequest.isLoading} type="submit" fullWidth>
            {t('Confirm code')}
          </Button>
          <h3 onClick={sendCodeAgain}>{t('Send another code')}</h3>
        </form>
      </SecondStepDataWrapper>
    </CreatorSignInSecondStepWrapper>
  );
};

export default SecondStep;
