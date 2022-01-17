import { TagProps } from "./Tag.props";
import s from './Tag.module.css';
import cn from 'classnames';


export const Tag = ({ size = 'small', color = 'secondary', href, children, className, ...props }: TagProps): JSX.Element => {
    return (
        <div className={cn(s.tag, className, {
            [s.small]: size === 'small',
            [s.medium]: size === 'medium',
            [s.primary]: color === 'primary',
            [s.secondary]: color === 'secondary',
            [s.red]: color === 'red',
            [s.green]: color === 'green',
            [s.gray]: color === 'gray'
        })}
            {...props}>
            {
                href
                    ? <a href="{href}">{children}</a>
                    : <>{children}</>
            }
        </div>
    )
}