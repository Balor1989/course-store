import { TextareaProps } from './Textarea.props';
import cn from 'classnames';
import s from './Textarea.module.css';

export const Textarea = ({ className, ...props }: TextareaProps): JSX.Element => {
  return <textarea className={cn(className, s.textarea)} {...props} />;
};
