/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import MuiPopper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import { StyledBox, StyledPaper } from './popper.styles';
import { IPopperProps } from './popper.types';

const Popper: React.FC<IPopperProps> = ({
  content,
  onClose,
  offset,
  paperstyles,
  ...props
}) => (
  <ClickAwayListener onClickAway={onClose}>
    <StyledBox>
      {props.children}
      <MuiPopper
        onResize={undefined}
        onResizeCapture={undefined}
        modifiers={[
          {
            name: 'flip',
            enabled: false,
          },
          {
            name: 'offset',
            options: {
              offset: [offset?.along, offset?.away],
            },
          },
        ]}
        transition
        placement="bottom-end"
        role={props.id}
        {...props}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <StyledPaper paperstyles={paperstyles}>{content}</StyledPaper>
          </Grow>
        )}
      </MuiPopper>
    </StyledBox>
  </ClickAwayListener>
);

Popper.defaultProps = {
  offset: {
    away: 0,
    along: 0,
  },
};

export default Popper;
