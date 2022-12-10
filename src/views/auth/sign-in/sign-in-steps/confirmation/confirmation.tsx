import Button from 'components/button/button';
import InfoIcon from 'components/icons/info.icon';
import Text from 'components/typography/text';
import React, { useState } from 'react';
import {
  ConfirmCodeWrapper,
  CreatorSignInConfirmationWrapper,
  ErrorMessageData,
  ErrorMessageWrapper,
  ConfirmationDataWrapper,
} from './confirmation.styles';
import { useForm } from 'react-hook-form';
import { useSteps } from 'global-state/step/step-context';
import ReactCodeInputComponent from 'components/code-input/react-code-input';
import { useLogin } from 'server-state/mutations/use-login';
import { useAuth } from 'global-state/auth/auth.state';
import { useVerification } from 'server-state/mutations/use-verification';
import { useTranslation } from 'react-i18next';

const Confirmation: React.FC<{
  phone_number: string;
  saveTokenAndId: (accessToken: string, user_id: string) => void;
}> = ({ phone_number, saveTokenAndId }) => {
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
        phone_number,
        firebase_token: '12211221',
      },
      {
        onSuccess(res) {
          if (res.is_new_user) {
            saveTokenAndId(res.token, res.id);
            nextStep();
          } else if (res.status_code === 400) {
            setHasError(true);
          } else {
            login({
              tokens: { access: res.token, refresh: '12' },
              userId: res.id,
              userType: res.id_broker
                ? 'customer'
                : res.id_driver
                ? 'driver'
                : '',
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
    <CreatorSignInConfirmationWrapper>
      {hasError && (
        <ErrorMessageWrapper>
          <ErrorMessageData>
            <InfoIcon />
            <p>{t('Code is incorrect')}</p>
          </ErrorMessageData>
        </ErrorMessageWrapper>
      )}
      <ConfirmationDataWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Text size="lg" weight="800">
            {t('Great! Just one step')}
          </Text>
          <Text size="sm" weight="500">
            {t('We just sent a code to your phone')} +{phone_number}
          </Text>
          <ConfirmCodeWrapper>
            <ReactCodeInputComponent
              error={hasError}
              size="lg"
              typingHandler={() => hasError && setHasError(false)}
              setCode={(val: string) => {
                setVerificationCode(val);
              }}
            />
          </ConfirmCodeWrapper>
          <Button loading={loginRequest.isLoading} type="submit" fullWidth>
            {t('Confirm code')}
          </Button>
          <h3 onClick={sendCodeAgain}>{t('Send another code')}</h3>
        </form>
      </ConfirmationDataWrapper>
    </CreatorSignInConfirmationWrapper>
  );
};

export default Confirmation;
