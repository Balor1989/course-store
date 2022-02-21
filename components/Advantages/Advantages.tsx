import { AdvantagesProps } from './Advantages.props';
import s from './Advantages.module.css';
import CheckIcon from './check.svg';
import { Htag } from '..';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      <Htag tag="h2"> Преимущества</Htag>
      {advantages.map(item => (
        <div key={item._id} className={s.advantageBox}>
          <CheckIcon />
          <div className={s.title}>{item.title}</div>
          <hr className={s.line} />
          <p className={s.description}>{item.description}</p>
        </div>
      ))}
    </>
  );
};
