import React from 'react';
import { IconType } from 'types/icon.types';

const RightArrow: IconType = (props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 7H12.17L6.58 1.41L8 0L16 8L8 16L6.59 14.59L12.17 9H0V7Z"
      fill={props.fill ?? '#D8F0EA'}
    />
  </svg>
);

export default RightArrow;
