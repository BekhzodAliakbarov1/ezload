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

const SecondStep: React.FC<{
  phone_number: string;
  userType: 'customer' | 'driver';
}> = ({ phone_number, userType }) => {
  const [hasError, setHasError] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const { handleSubmit } = useForm();
  const { nextStep } = useSteps();
  const { mutate, isLoading } = useLogin();

  const sendCodeAgain = () => {
    // sendCode to api
  };
  const onSubmit = () => {
    mutate(
      {
        code: verificationCode,
        is_broker: userType === 'customer',
        is_driver: userType === 'driver',
        phone_number,
      },
      {
        onSuccess(res) {
          console.log(res);
        },
        onError(err) {
          console.log(err);
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
            <p color="light">Sorry, this mobile not registered</p>
          </ErrorMessageData>
        </ErrorMessageWrapper>
      )}
      <SecondStepDataWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Text size="lg" weight="800">
            Great! Just one step
          </Text>
          <Text size="sm" weight="500">
            We just sent a code to your phone +1 919 980 6800
          </Text>
          <ConfirmCodeWrapper error={hasError}>
            <ReactCodeInputComponent size="lg" setCode={setVerificationCode} />
          </ConfirmCodeWrapper>
          <Button loading={isLoading} type="submit" fullWidth>
            Confirm code
          </Button>
          <h3 onClick={sendCodeAgain}>Send another code</h3>
        </form>
      </SecondStepDataWrapper>
    </CreatorSignInSecondStepWrapper>
  );
};

export default SecondStep;
