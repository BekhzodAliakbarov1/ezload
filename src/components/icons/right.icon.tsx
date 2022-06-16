import { IconType } from 'types/icon.types';

export const RightIcon: IconType = (props) => {
  return (
    <svg
      width="101"
      height="24"
      viewBox="0 0 101 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M89.1415 6.5899C88.9075 6.71614 88.7616 6.95618 88.7616 7.21726V11.2827H0.734295C0.328964 11.2827 0 11.604 0 12C0 12.3959 0.328964 12.7172 0.734295 12.7172H88.7616V16.7827C88.7616 17.0447 88.9075 17.2848 89.1415 17.4101C89.3755 17.5372 89.6613 17.5286 89.8875 17.39L97.6573 12.6073C97.8708 12.4753 98 12.2467 98 12C98 11.7532 97.8708 11.5247 97.6573 11.3927L89.8875 6.60998C89.7681 6.5373 89.632 6.5 89.4959 6.5C89.3745 6.5 89.2521 6.5306 89.1415 6.5899Z"
        fill={props.fill ?? '#213A44'}
      />
    </svg>
  );
};