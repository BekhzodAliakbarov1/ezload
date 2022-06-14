import React from 'react';
import { IconType } from 'types/icon.types';

const PenIcon: IconType = (props) => (
  <svg
    width={props.size ?? '16'}
    height={props.size ?? '16'}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 11.5005V14.0005H4.5L11.8733 6.62719L9.37333 4.1272L2 11.5005ZM13.8067 4.69386C13.9308 4.56895 14.0005 4.39999 14.0005 4.22386C14.0005 4.04774 13.9308 3.87877 13.8067 3.75386L12.2467 2.19386C12.1218 2.06969 11.9528 2 11.7767 2C11.6005 2 11.4316 2.06969 11.3067 2.19386L10.0867 3.41386L12.5867 5.91386L13.8067 4.69386V4.69386Z"
      fill="#9CA7AC"
    />
  </svg>
);

export default PenIcon;
