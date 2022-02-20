import { GrcBoxProps } from './GrcBox.props';
import cn from 'classnames';
import s from './GrcBox.module.css';
import { Card } from '../Card/Card';

export const GrcBox = ({ count }: GrcBoxProps): JSX.Element => {
  return (
    <>
      <Card className={s.count}>
        <p className={s.title}>Всего вакансий</p>
        <p className={s.length}>{count}</p>
      </Card>
      <Card className={s.salary}>
        <p className={s.salaryTitle}>Всего вакансий</p>
        <p className={s.slaryLength}>{count}</p>
        <div className={s.salaryRate}>{count}</div>
      </Card>
    </>
  );
};
