import React from 'react';
import { IconType } from 'types/icon.types';

const ProfileIcon: IconType = (props) => (
  <svg
    width={props.size ?? 12}
    height={props.size ?? 14}
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.98985 9.23047C3.41144 9.23047 1.20953 9.62031 1.20953 11.1816C1.20953 12.7428 3.39747 13.1467 5.98985 13.1467C8.56826 13.1467 10.7695 12.7562 10.7695 11.1955C10.7695 9.63491 8.58223 9.23047 5.98985 9.23047Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.98986 7.0036C7.68193 7.0036 9.05336 5.63153 9.05336 3.93947C9.05336 2.24741 7.68193 0.875977 5.98986 0.875977C4.2978 0.875977 2.92574 2.24741 2.92574 3.93947C2.92002 5.62582 4.28256 6.99788 5.96828 7.0036H5.98986Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ProfileIcon;
