import React from 'react';
import { IconType } from 'types/icon.types';

const RightShowIcon: IconType = (props) => (
  <svg
    width={props.size ?? '24'}
    height={props.size ?? '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z"
      fill="#D8F0EA"
    />
  </svg>
);

export default RightShowIcon;
