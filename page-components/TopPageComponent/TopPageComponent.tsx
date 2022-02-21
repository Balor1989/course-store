import { TopPageComponentProps } from './TopPageComponent.props';
import { Htag, Tag, GrcBox } from '../../components';
import s from './TopPageComponent.module.css';

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return (
    <section className={s.topPageWrapper}>
      <div className={s.pageComponentTitleBox}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="gray" size="medium">
            {products.length}
          </Tag>
        )}
        <p>Sort</p>
      </div>
      <div>{products && products.map(product => <div key={product._id}>{product.title}</div>)}</div>

      <div className={s.grcTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        {products && (
          <Tag color="red" size="medium">
            grc
          </Tag>
        )}
      </div>
      {products && page.hh && <GrcBox {...page.hh} />}
    </section>
  );
};
