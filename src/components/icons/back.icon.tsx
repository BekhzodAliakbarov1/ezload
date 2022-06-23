import React from 'react';
import { IconType } from 'types/icon.types';

const BackIcon: IconType = (props) => (
  <svg
    width={props.size ?? '24'}
    height={props.size ?? '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.2951 18L15.7051 16.59L11.1251 12L15.7051 7.41L14.2951 6L8.29508 12L14.2951 18Z"
      fill="#6B7C82"
    />
  </svg>
);

export default BackIcon;
