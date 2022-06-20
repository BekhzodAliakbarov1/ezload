import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export interface ButtonProps extends MuiButtonProps {
  buttonType?:
    | 'contained'
    | 'dark'
    | 'warning'
    | 'secondary_dark'
    | 'white'
    | 'disabled';
  loading?: boolean;
  disabled?: boolean;
}
