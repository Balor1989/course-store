import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import s from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import LogoIcon from '../logo.svg';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <aside className={cn(s.sidebar)} {...props}>
      <LogoIcon className={s.logoIcon} />
      <form action="">
        <input type="input" />
      </form>
      <Menu />
    </aside>
  );
};
