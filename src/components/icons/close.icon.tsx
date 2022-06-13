import React from 'react';
import { IconType } from 'types/icon.types';

const CloseIcon: IconType = (props) => (
  <svg
    width={props.size ?? '24'}
    height={props.size ?? '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.155 7.209L16.946 6L12.155 10.791L7.36403 6L6.15503 7.209L10.946 12L6.15503 16.791L7.36403 18L12.155 13.209L16.946 18L18.155 16.791L13.364 12L18.155 7.209Z"
      fill="#F09582"
    />
  </svg>
);

export default CloseIcon;
