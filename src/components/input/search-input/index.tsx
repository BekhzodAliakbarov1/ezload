import React from 'react';
import styled from 'styled-components';

import Input, { InputProps } from '../input';

export const SearchInput = styled((props: InputProps) => (
  <Input {...props} ContainerProps={{ margin: '0 !important' }} />
))`
  && {
    :disabled {
      cursor: no-drop;
      background-color: ${(props) => props.theme.bg.main};
    }
  }
`;
