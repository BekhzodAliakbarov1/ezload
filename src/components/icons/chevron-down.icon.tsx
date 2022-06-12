import React from 'react';
import { IconType } from 'types/icon.types';

const ChevronDownIcon: IconType = (props) => (
  <svg
    width={props.size ?? '24'}
    height={props.size ?? '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9.70492L7.41 8.29492L12 12.8749L16.59 8.29492L18 9.70492L12 15.7049L6 9.70492Z"
      fill="#9F9F9F"
    />
  </svg>
);

export default ChevronDownIcon;
