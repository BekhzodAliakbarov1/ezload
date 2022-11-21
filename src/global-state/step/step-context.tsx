import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { StepContextInterface, StepProps } from './step.types';

const StepContext = React.createContext<StepContextInterface>(
  {} as StepContextInterface
);

export interface UserProp {
  state?: {
    step?: number;
  };
}

export const StepsProvider: React.FC = ({ children }) => {
  // after all give it default 1 value
  const [currentStep, setCurrentStep] = useState(2);
  const { state } = useLocation() as UserProp;
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const previusStep = () => setCurrentStep((prev) => prev - 1);
  const setStep = (step: number) => setCurrentStep(step);

  useEffect(() => {
    if (state && state.step) {
      setStep(state.step);
    }
  }, [state]);
  return (
    <StepContext.Provider
      value={{
        currentStep,
        nextStep,
        previusStep,
        setStep,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};

export const useSteps = () => useContext(StepContext);

export const Step: React.FC<StepProps> = (props) => {
  const { currentStep } = useSteps();

  return <>{props.step === currentStep ? props.children : null}</>;
};
