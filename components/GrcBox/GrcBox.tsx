import { GrcBoxProps } from './GrcBox.props';
import cn from 'classnames';
import s from './GrcBox.module.css';
import { Card } from '../Card/Card';
import RateIcon from './Rate.svg';

export const GrcBox = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: GrcBoxProps): JSX.Element => {
  return (
    <>
      <Card className={s.count}>
        <p className={s.title}>Всего вакансий</p>
        <p className={s.length}>{count}</p>
      </Card>
      <Card className={s.salary}>
        <div>
          <p className={s.salaryTitle}>Junior</p>
          <p className={s.slaryLength}>{juniorSalary}</p>
          <div className={s.salaryRate}>{count}</div>
          <RateIcon className={s.iconFill} />
          <RateIcon />
          <RateIcon />
        </div>
        <div>
          <p className={s.salaryTitle}>Middle</p>
          <p className={s.slaryLength}>{middleSalary}</p>
          <div className={s.salaryRate}>{count}</div>
          <RateIcon className={s.iconFill} />
          <RateIcon className={s.iconFill} />
          <RateIcon />
        </div>
        <div>
          <p className={s.salaryTitle}>Senior</p>
          <p className={s.slaryLength}>{seniorSalary}</p>
          <div className={s.salaryRate}>{count}</div>
          <RateIcon className={s.iconFill} />
          <RateIcon className={s.iconFill} />
          <RateIcon className={s.iconFill} />
        </div>
      </Card>
    </>
  );
};
