import cn from 'classnames';
import s from './Sort.module.css';
import { SortEnum, SortProps } from './Sort.props';
import SortIcon from './Sort.svg';

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
  return (
    <div className={cn(s.sortBox, className)} {...props}>
      <p
        onClick={() => setSort(SortEnum.Rating)}
        className={cn(s.sortBy, {
          [s.active]: sort === SortEnum.Rating,
        })}
      >
        <SortIcon className={s.sortIcon} /> По рейтингу
      </p>
      <p
        onClick={() => setSort(SortEnum.Price)}
        className={cn(s.sortBy, {
          [s.active]: sort === SortEnum.Price,
        })}
      >
        <SortIcon className={s.sortIcon} /> По цене
      </p>
    </div>
  );
};
