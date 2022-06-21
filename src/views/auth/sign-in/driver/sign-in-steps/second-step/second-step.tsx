import Button from 'components/button/button';
import InfoIcon from 'components/icons/info.icon';
import Text from 'components/typography/text';
import React, { useState } from 'react';
import {
  ConfirmCodeWrapper,
  DriverSignInSecondStepWrapper,
  ErrorMessageData,
  ErrorMessageWrapper,
  SecondStepDataWrapper,
} from './second-step.styles';
import { useForm } from 'react-hook-form';
import { useSteps } from 'global-state/step/step-context';
import ReactCodeInputComponent from 'components/code-input/react-code-input';

const SecondStep = () => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const { handleSubmit } = useForm();
  const { nextStep, setStep } = useSteps();

  const sendCodeAgain = () => {
    // sendCode to api
  };
  const onSubmit = () => {
    console.log(verificationCode);
    // 1. Check verification code is correct or no

    // 2. If it is first time to this user move to step 3
    nextStep();

    // 3. If it is not first time move to step4 uncomment next line
    // setStep(4)
  };

  return (
    <DriverSignInSecondStepWrapper>
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
    </DriverSignInSecondStepWrapper>
  );
};

export default SecondStep;
