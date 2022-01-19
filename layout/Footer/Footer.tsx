import cn from 'classnames';
import { FooterProps } from './Footer.props';
import s from './Footer.module.css';
import { Paragraph } from '../../components';
import {format} from 'date-fns';

export const Footer = ({className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, s.footer)} {...props}>
                <Paragraph color='white'>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</Paragraph>
                <Paragraph color='white'><a href='#' target="_blank">Пользовательское соглашение</a></Paragraph>
                <Paragraph color='white'><a href='#' target="_blank">Политика конфиденциальности</a></Paragraph>
        </footer>
    );
};