export interface CustomTheme {
  bg: {
    main: string;
    secondary: string;
  };
  text: {
    main_100: string;
    main_90: string;
    main_80: string;
    main_70: string;
    main_60: string;
    main_50: string;
    main_40: string;
    main_30: string;
    main_20: string;
    main_10: string;
    main_5: string;

    light: string;
  };
  text_active: {
    active: string;
    red_active: string;
  };
  button: {
    contained: string;
    dark: string;
    warning: string;
    secondary_dark: string;
    secondary_dark_hover: string;
    contained_hover: string;
    dark_hover: string;
    warning_hover: string;
    red_active: string;
  };
  colors: {
    primary: string;
    primary_variant: string;
    tertiary: string;
    disabled: string;
    secondary: string;
    white: string;
  };
  sizes: {
    md: string;
    sm: string;
    lg: string;
    xl: string;
  };
}

export type CurrentTheme = 'light' | 'dark';
