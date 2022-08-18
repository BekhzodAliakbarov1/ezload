import React from 'react';
import { IconType } from 'types/icon.types';

const MenuIcon: IconType = (props) => (
  <svg
    width={props.size ?? '24'}
    height={props.size ?? '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="#6B7C82" />
  </svg>
);

export default MenuIcon;
