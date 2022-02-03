import { ParagraphProps } from './Paragraph.props';
import cn from 'classnames';
import s from './Paragraph.module.css';

export const Paragraph = ({
  size = 'medium',
  color = 'primary',
  className,
  children,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(s.paragraph, className, {
        [s.small]: size === 'small',
        [s.medium]: size === 'medium',
        [s.large]: size === 'large',
        [s.primary]: color === 'primary',
        [s.white]: color === 'white',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
