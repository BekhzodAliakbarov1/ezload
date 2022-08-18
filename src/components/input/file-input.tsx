import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: none;
`;

interface Props {
  id?: string;
  accept?: 'image/*';
}

const FileInput = React.forwardRef<
  HTMLInputElement,
  Props & InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <Input
    id={props.id}
    type="file"
    ref={ref}
    onChange={(e) => e.target.files}
    accept={props.accept}
    {...props}
  />
));

FileInput.displayName = 'FileInput';

export default FileInput;
