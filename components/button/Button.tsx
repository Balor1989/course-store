

import s from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

export const Button = ({ appearance, children }: ButtonProps): JSX.Element => {
    
    return (
        <button className={cn(s.button, {
            [s.primary]: appearance === 'primary',
            [s.secondary]: appearance === 'secondary'
        })}>{children}</button>
    );
};
