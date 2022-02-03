import { TopPageComponentProps } from './TopPageComponent.props';

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return <p>{products && products.length}</p>;
};
