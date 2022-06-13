import React from 'react';
import { IconType } from 'types/icon.types';

const TickIcon: IconType = (props) => (
  <svg
    width={props.size ?? '24'}
    height={props.size ?? '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3H19C20.11 3 21 3.9 21 5V19C21 20.1 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3ZM15.9228 8.23834L17.1411 9.46929L10.8445 15.7659L6.85864 11.78L8.08891 10.5498L10.8446 13.3005L15.9228 8.23834Z"
      fill={props.fill ?? '#4FBC9F'}
    />
  </svg>
);

export default TickIcon;
