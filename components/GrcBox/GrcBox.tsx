import { GrcBoxProps } from './GrcBox.props';
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
    <section className={s.hantBox}>
      <Card className={s.countBox}>
        <p className={s.title}>Всего вакансий</p>
        <p className={s.length}>{count}</p>
      </Card>
      <Card className={s.salaryBox}>
        <div className={s.salaryCard}>
          <p className={s.title}>Junior</p>
          <p className={s.salaryValue}>{(juniorSalary / 77).toFixed()} $</p>
          <div className={s.salaryRate}>
            <RateIcon className={s.iconFill} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        <div className={s.salaryCard}>
          <p className={s.title}>Middle</p>
          <p className={s.salaryValue}>{(middleSalary / 77).toFixed()} $</p>
          <div className={s.salaryRate}>
            <RateIcon className={s.iconFill} />
            <RateIcon className={s.iconFill} />
            <RateIcon />
          </div>
        </div>
        <div className={s.salaryCard}>
          <p className={s.title}>Senior</p>
          <p className={s.salaryValue}>{(seniorSalary / 77).toFixed()} $</p>
          <div className={s.salaryRate}>
            <RateIcon className={s.iconFill} />
            <RateIcon className={s.iconFill} />
            <RateIcon className={s.iconFill} />
          </div>
        </div>
      </Card>
    </section>
  );
};
