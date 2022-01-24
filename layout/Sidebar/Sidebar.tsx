import cn from 'classnames';
import s from './Sidebar.module.css';
import { SidebarProps } from "./Sidebar.props";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
    return (
        <aside {...props}>
            Sidebar
        </aside>
    );
};