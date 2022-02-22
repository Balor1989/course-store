import cn from 'classnames';
import s from './Sort.module.css';
import { SortEnum, SortProps } from './Sort.props';
import SortIcon from './Sort.svg';

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
  return (
    <div className={cn(s.sort, className)} {...props}>
      <p
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [s.active]: sort === SortEnum.Rating,
        })}
      >
        <SortIcon /> По рейтингу
      </p>
      <p
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [s.active]: sort === SortEnum.Price,
        })}
      >
        <SortIcon /> По цене
      </p>
    </div>
  );
};
