import { CSSProp } from 'styled-components';
import { PaperProps as MuiPaperProps } from '@mui/material/Paper';
import { PopperProps as MuiPopperProps } from '@mui/material/Popper';

export interface IPopperProps extends MuiPopperProps {
  onClose: () => void;
  content: React.ReactNode;
  paperstyles?: CSSProp;
  offset?: {
    away?: number;
    along?: number;
  };
}

export interface IPaperProps extends MuiPaperProps {
  paperstyles?: CSSProp;
}
