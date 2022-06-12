import React from 'react';
import { IconType } from 'types/icon.types';

const InfoIcon: IconType = (props) => (
  <svg
    width={props.size ?? '24'}
    height={props.size ?? '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3C10.22 3 8.47988 3.52784 6.99984 4.51677C5.5198 5.5057 4.36627 6.91131 3.68508 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37734 17.1053 5.63601 18.364C6.89468 19.6226 8.49834 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C21 9.61305 20.0518 7.32387 18.364 5.63605C16.6762 3.94822 14.387 3 12 3ZM13.8 16.716C13.355 16.891 13 17.016 12.73 17.11C12.4246 17.2053 12.1058 17.2509 11.786 17.245H11.664C11.2533 17.2442 10.8541 17.1086 10.528 16.859C10.3802 16.7438 10.2611 16.5961 10.1798 16.4273C10.0984 16.2586 10.0571 16.0733 10.059 15.886C10.0592 15.7272 10.0688 15.5686 10.088 15.411C10.119 15.232 10.153 15.052 10.197 14.871L10.758 12.948C10.8106 12.7778 10.8523 12.6045 10.883 12.429C10.9187 12.2749 10.9372 12.1172 10.938 11.959C10.9483 11.8671 10.9399 11.7741 10.9132 11.6856C10.8866 11.5971 10.8423 11.5149 10.783 11.444C10.6065 11.3259 10.3943 11.2732 10.183 11.295C10.0322 11.2978 9.88254 11.321 9.738 11.364C9.587 11.409 9.45799 11.454 9.35299 11.489L9.509 10.87C9.878 10.726 10.228 10.601 10.562 10.495C10.866 10.399 11.1822 10.3471 11.501 10.341C11.9481 10.3104 12.3909 10.4453 12.745 10.72C12.8877 10.8403 13.0014 10.9913 13.0776 11.1617C13.1538 11.332 13.1905 11.5174 13.185 11.704C13.185 11.789 13.155 11.935 13.155 12.144C13.1377 12.3409 13.0992 12.5354 13.04 12.724L12.486 14.637C12.435 14.812 12.396 14.986 12.361 15.161C12.3297 15.3176 12.3113 15.4764 12.306 15.636C12.2933 15.7293 12.3024 15.8243 12.3326 15.9135C12.3628 16.0026 12.4132 16.0836 12.48 16.15C12.6627 16.2609 12.8762 16.31 13.089 16.29C13.2536 16.2975 13.4185 16.2824 13.579 16.245C13.7051 16.2153 13.8286 16.1751 13.948 16.125L13.8 16.716ZM12.736 9.416C12.5609 9.41639 12.3876 9.38231 12.2257 9.31569C12.0638 9.24906 11.9166 9.1512 11.7926 9.02769C11.6685 8.90419 11.5699 8.75746 11.5026 8.59589C11.4352 8.43431 11.4004 8.26105 11.4 8.086C11.3994 7.82275 11.4769 7.56525 11.6226 7.34604C11.7684 7.12683 11.9759 6.95576 12.2189 6.85448C12.4619 6.75319 12.7294 6.72622 12.9877 6.77699C13.246 6.82777 13.4834 6.954 13.67 7.13972C13.8566 7.32545 13.9839 7.56233 14.0359 7.8204C14.0878 8.07848 14.062 8.34615 13.9618 8.58958C13.8616 8.83302 13.6915 9.04127 13.473 9.18802C13.2544 9.33476 12.9972 9.41341 12.734 9.414L12.736 9.416Z"
      fill="white"
    />
  </svg>
);

export default InfoIcon;
