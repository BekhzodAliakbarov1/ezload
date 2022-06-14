import React from 'react';
import { IconType } from 'types/icon.types';

const BucketIcon: IconType = (props) => (
  <svg
    width={props.size ?? '30'}
    height={props.size ?? '30'}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.4817 30.3713C11.4839 31.1566 11.7968 31.909 12.352 32.4643C12.9073 33.0195 13.6598 33.3324 14.445 33.3346H26.2967C27.0819 33.3324 27.8344 33.0195 28.3896 32.4643C28.9449 31.909 29.2578 31.1566 29.26 30.3713V12.5946H11.4817V30.3713ZM30.74 8.14964H25.555L24.0733 6.66797H16.6667L15.185 8.14964H10V11.113H30.74V8.14964Z"
      fill="#EA694D"
    />
  </svg>
);

export default BucketIcon;
