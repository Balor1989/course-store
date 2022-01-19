import cn from 'classnames';
import { FooterProps } from './Footer.props';

import s from './Sidebar.module.css';


export const Footer = ({ ...props }: FooterProps): JSX.Element => {
    return (
        <footer {...props}>
            Footer
        </footer>
    );
};