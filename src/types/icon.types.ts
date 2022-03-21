export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  stroke?: string;
}
export type IconType = React.FC<IconBaseProps>;
