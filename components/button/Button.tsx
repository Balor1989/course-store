import s from './Button.module.css';
import { ButtonProps } from './Button.props';
import ArrowSVG from './arrow.svg';
import cn from 'classnames';

export const Button = ({
  appearance,
  arrow = 'none',
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(s.button, className, {
        [s.primary]: appearance === 'primary',
        [s.secondary]: appearance === 'secondary',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(s.arrow, className, {
            [s.right]: arrow === 'right',
            [s.down]: arrow === 'down',
          })}
        >
          <ArrowSVG />
        </span>
      )}
    </button>
  );
};
