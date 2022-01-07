
import classNames from 'classnames';
import s from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

export const Button = ({ appearance, children }: ButtonProps): JSX.Element => {
    switch (appearance) {
        case 'primary':
            return <button className={s.buttonPrimary}>{children}</button>;
        
        case 'secondary':
            return <button className={s.buttonSecondary}>{children}</button>;
        default:
            return <></>;
    }
};