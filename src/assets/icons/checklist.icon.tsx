import React from 'react';
import { IconType } from 'types/icon.types';

const CheckListIcon: IconType = (props) => (
  <svg
    width={props.size ?? '18'}
    height={props.size ?? '16'}
    viewBox="0 0 18 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 1H18V3H5V1ZM0 0.5H3V3.5H0V0.5ZM0 6.5H3V9.5H0V6.5ZM0 12.5H3V15.5H0V12.5ZM5 7H18V9H5V7ZM5 13H18V15H5V13Z"
      fill="currentColor"
    />
  </svg>
);

export default CheckListIcon;
