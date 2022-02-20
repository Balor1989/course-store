import { TopPageComponentProps } from './TopPageComponent.props';
import { Htag, Tag } from '../../components';

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return (
    <>
      <div>
        <Htag tag="h1">{page.title}</Htag>
        {products && <Tag color="gray">{products.length}</Tag>}
      </div>
      <p>{products && products.length}</p>
    </>
  );
};
