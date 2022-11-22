import React from 'react';
import { IconType } from 'types/icon.types';

const RingIcon: IconType = (props) => (
  <svg
    width={props.size ?? '24'}
    height={props.size ?? '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.231 19.2957C10.2464 19.7546 10.4396 20.1895 10.7696 20.5086C11.0997 20.8278 11.5409 21.0062 12 21.0062C12.4591 21.0062 12.9003 20.8278 13.2304 20.5086C13.5604 20.1895 13.7536 19.7546 13.769 19.2957H10.231ZM18.116 15.7017V10.7157C18.0988 9.36863 17.6242 8.06744 16.7702 7.02556C15.9162 5.98368 14.7335 5.26298 13.416 4.98168V4.36468C13.4062 3.99631 13.253 3.64631 12.989 3.38923C12.725 3.13214 12.371 2.98828 12.0025 2.98828C11.634 2.98828 11.28 3.13214 11.016 3.38923C10.752 3.64631 10.5988 3.99631 10.589 4.36468V4.98168C9.27154 5.26298 8.08879 5.98368 7.23479 7.02556C6.38079 8.06744 5.90624 9.36863 5.889 10.7157V15.7017L4 17.5217V18.4307H20V17.5217L18.116 15.7017Z"
      fill="#52666D"
    />
  </svg>
);

export default RingIcon;