import React from 'react';
import styled, { CSSProp } from 'styled-components';
import MuiAvatar, { AvatarProps } from '@mui/material/Avatar';
import LazyImage from 'components/lazy-image/lazy-image';
import ProfileIcon from '../icons/profile.icon';

export interface Props extends AvatarProps {
  width?: string | number;
  height?: string | number;
  hasStory?: boolean;
  avatarstyles?: CSSProp;
}

const StyledAvatar = styled(MuiAvatar)<Props>`
  ${(props) => props.avatarstyles}
  border: 3px solid ${(props) => props.theme.bg.secondary};
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.bg.main};
  svg {
    color: ${(props) => props.theme.text.main_100};
  }
  img {
    width: 100%;
  }
`;

const Avatar = ({ avatarstyles, sizes, ...props }: Props) => (
  <StyledAvatar
    avatarstyles={avatarstyles}
    sx={{ width: sizes, height: sizes }}
  >
    {props.src === undefined || props.src === '' ? (
      <ProfileIcon className="fallbackImg" size={60} />
    ) : (
      <LazyImage src={props.src} alt="avatar" />
    )}
  </StyledAvatar>
);

export default Avatar;
