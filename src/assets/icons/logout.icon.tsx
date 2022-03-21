import React from 'react';
import { IconType } from 'types/icon.types';

const LogoutIcon: IconType = (props) => (
  <svg
    width={props.size ?? '18'}
    height={props.size ?? '18'}
    viewBox="0 0 18 18"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 18H7C5.89543 18 5 17.1046 5 16V12H7V16H16V2H7V6H5V2C5 0.89543 5.89543 0 7 0H16C17.1046 0 18 0.89543 18 2V16C18 17.1046 17.1046 18 16 18ZM9 13V10H0V8H9V5L14 9L9 13Z"
      fill="currentColor"
    />
  </svg>
);

export default LogoutIcon;
