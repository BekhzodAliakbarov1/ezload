import React from 'react';
import ReactCodeInput from 'react-verification-code-input';
import { ReactCodeInputWrapper } from './react-code-input.styles';

const ReactCodeInputComponent: React.FC<{
  size: 'lg' | 'md';
  setCode: (val: string) => void;
  typingHandler: () => void;
  error?: boolean;
}> = ({ setCode, size, error, typingHandler }) => {
  return (
    <ReactCodeInputWrapper error={error} size={size}>
      <ReactCodeInput onChange={() => typingHandler()} onComplete={setCode} />
    </ReactCodeInputWrapper>
  );
};

export default ReactCodeInputComponent;
