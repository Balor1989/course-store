import cn from 'classnames';
import { HeaderProps } from './Header.props';
import s from './Sidebar.module.css';


export const Header = ({ ...props }: HeaderProps): JSX.Element => {
    return (
        <header {...props}>
            Header
        </header>
    );
};