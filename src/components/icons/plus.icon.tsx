import React from 'react';
import { IconType } from 'types/icon.types';

const PlusIcon: IconType = (props) => (
  <svg
    width={props.size ?? '24'}
    height={props.size ?? '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.857 4V10.857H4V13.143H10.857V20H13.143V13.143H20V10.857H13.143V4H10.857Z"
      fill="#F2F4F4"
    />
  </svg>
);

export default PlusIcon;
