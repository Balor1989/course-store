import { AdvantagesProps } from './Advantages.props';
import s from './Advantages.module.css';
import CheckIcon from './check.svg';
import { Htag } from '..';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      <Htag tag="h2"> Преимущества</Htag>
      {advantages.map(item => (
        <div key={item._id}>
          <CheckIcon />
          <Htag tag="h3">{item.title}</Htag>
          <hr />
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
};
