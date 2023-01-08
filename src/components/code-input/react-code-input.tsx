import React, { useEffect, useState } from 'react';
import ReactCodeInput from 'react-verification-code-input';
import { ReactCodeInputWrapper } from './react-code-input.styles';

const ReactCodeInputComponent: React.FC<{
  size: 'lg' | 'md';
  setCode: (val: string) => void;
  typingHandler: () => void;
  error?: boolean;
  loading?: boolean;
  values?: string[];
}> = ({ setCode, size, error, typingHandler, loading, values }) => {
  return (
    <ReactCodeInputWrapper error={error} size={size}>
      <ReactCodeInput
        key={JSON.stringify(values)}
        loading={loading}
        onChange={() => typingHandler()}
        onComplete={setCode}
        values={values}
        autoFocus
        type="number"
        required
      />
    </ReactCodeInputWrapper>
  );
};

export default ReactCodeInputComponent;
