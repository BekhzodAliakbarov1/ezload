import React from 'react';
import { IconType } from 'types/icon.types';

const QuotesIcon: IconType = (props) => (
  <svg
    width="32"
    height="26"
    viewBox="0 0 32 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.5 7.3125V16.25C14.4982 17.5425 13.8655 18.7816 12.7407 19.6955C11.6158 20.6095 10.0907 21.1235 8.5 21.125C8.23478 21.125 7.98043 21.0394 7.79289 20.887C7.60536 20.7347 7.5 20.528 7.5 20.3125C7.5 20.097 7.60536 19.8903 7.79289 19.738C7.98043 19.5856 8.23478 19.5 8.5 19.5C9.5605 19.499 10.5772 19.1563 11.3271 18.547C12.077 17.9377 12.4988 17.1117 12.5 16.25V15.4375H5C4.46975 15.437 3.9614 15.2656 3.58646 14.961C3.21151 14.6564 3.00061 14.2433 3 13.8125V7.3125C3.00061 6.88167 3.21151 6.46864 3.58646 6.164C3.9614 5.85936 4.46975 5.68799 5 5.6875H12.5C13.0302 5.68799 13.5386 5.85936 13.9135 6.164C14.2885 6.46864 14.4994 6.88167 14.5 7.3125ZM27 5.6875H19.5C18.9698 5.68799 18.4614 5.85936 18.0865 6.164C17.7115 6.46864 17.5006 6.88167 17.5 7.3125V13.8125C17.5006 14.2433 17.7115 14.6564 18.0865 14.961C18.4614 15.2656 18.9698 15.437 19.5 15.4375H27V16.25C26.9988 17.1117 26.577 17.9377 25.8271 18.547C25.0772 19.1563 24.0605 19.499 23 19.5C22.7348 19.5 22.4804 19.5856 22.2929 19.738C22.1054 19.8903 22 20.097 22 20.3125C22 20.528 22.1054 20.7347 22.2929 20.887C22.4804 21.0394 22.7348 21.125 23 21.125C24.5907 21.1235 26.1158 20.6095 27.2407 19.6955C28.3655 18.7816 28.9982 17.5425 29 16.25V7.3125C28.9994 6.88167 28.7885 6.46864 28.4135 6.164C28.0386 5.85936 27.5302 5.68799 27 5.6875Z"
      fill={props.fill ?? '#EA694D'}
    />
  </svg>
);

export default QuotesIcon;