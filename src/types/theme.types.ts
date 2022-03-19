export interface CustomTheme {
  bg: {
    main: string;
    light: string;
  };
  text: {
    main: string;
    light: string;
  };
  primary: {
    main: string;
    light: string;
  };
  sizes: {
    md: string;
    sm: string;
    lg: string;
    xl: string;
  };
}

export type CurrentTheme = 'light' | 'dark';
