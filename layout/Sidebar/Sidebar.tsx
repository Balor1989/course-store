import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import s from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import LogoIcon from '../logo.svg';
import { Search } from '../../components';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <aside className={cn(s.sidebarBox)} {...props}>
      <LogoIcon className={s.logoIcon} />
      <form action="" className={s.form}>
        <Search />
      </form>
      <Menu />
    </aside>
  );
};
