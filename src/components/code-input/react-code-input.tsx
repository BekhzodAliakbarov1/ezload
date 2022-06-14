import React from 'react';
import ReactCodeInput from 'react-verification-code-input';
import { ReactCodeInputWrapper } from './react-code-input.styles';

const ReactCodeInputComponent: React.FC<{
  size: 'lg' | 'md';
  setCode: (val: string) => void;
  error?: boolean;
}> = ({ setCode, size, error }) => {
  return (
    <ReactCodeInputWrapper error={error} size={size}>
      <ReactCodeInput onComplete={(number) => setCode(number)} />
    </ReactCodeInputWrapper>
  );
};

export default ReactCodeInputComponent;
