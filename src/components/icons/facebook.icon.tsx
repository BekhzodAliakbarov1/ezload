import React from 'react';
import { IconType } from 'types/icon.types';

const FacebookIcon: IconType = (props) => (
  <svg
    width={props.size ?? '27'}
    height={props.size ?? '27'}
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 13.5C0 6.04416 6.04416 0 13.5 0C20.9558 0 27 6.04416 27 13.5C27 20.9558 20.9558 27 13.5 27C6.04416 27 0 20.9558 0 13.5ZM13.5 6.75C17.2125 6.75 20.25 9.7875 20.25 13.5C20.25 16.875 17.8031 19.7437 14.4281 20.25V15.4406H16.0312L16.3687 13.5H14.5125V12.2344C14.5125 11.7281 14.7656 11.2219 15.6094 11.2219H16.4531V9.53438C16.4531 9.53438 15.6938 9.36563 14.9344 9.36563C13.4156 9.36563 12.4031 10.2937 12.4031 11.9812V13.5H10.7156V15.4406H12.4031V20.1656C9.19687 19.6594 6.75 16.875 6.75 13.5C6.75 9.7875 9.7875 6.75 13.5 6.75Z"
      fill="#E5E8EA"
    />
  </svg>
);

export default FacebookIcon;
