export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  isActive?: boolean;
  cursor?: 'pointer' | 'default';
}