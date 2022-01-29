import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import s from './Sidebar.module.css';
import { SidebarProps } from "./Sidebar.props";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
    return (
        <aside {...props}>
            <Menu />
        </aside>
    );
};