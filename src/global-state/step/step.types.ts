import React from 'react';

export interface StepContextInterface {
  currentStep: number;
  nextStep: () => void;
  setStep: (step: number) => void;
  previusStep: () => void;
}

export interface StepProps {
  step: number;
  // children: React.ReactNode | null | undefined;
}
