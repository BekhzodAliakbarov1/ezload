import React from 'react';
import { IconType } from 'types/icon.types';

const FilterIcon: IconType = (props) => (
  <svg
    width={props.size ?? '24'}
    height={props.size ?? '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.23935 4.81125C5.52425 7.725 9.74338 13.125 9.74338 13.125V19.875C9.74338 20.4937 10.2524 21 10.8745 21H13.1368C13.7589 21 14.2679 20.4937 14.2679 19.875V13.125C14.2679 13.125 18.4758 7.725 20.7606 4.81125C21.3375 4.06875 20.8059 3 19.8671 3H4.13295C3.19411 3 2.66247 4.06875 3.23935 4.81125Z"
      fill="#F2F4F4"
    />
  </svg>
);

export default FilterIcon;
