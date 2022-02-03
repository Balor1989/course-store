import cn from 'classnames';
import { MainProps } from './Main.props';
import s from './Sidebar.module.css';

export const Main = ({ children, ...props }: MainProps): JSX.Element => {
  return <main {...props}>{children}</main>;
};
