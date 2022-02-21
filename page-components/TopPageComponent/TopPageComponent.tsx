import { TopPageComponentProps } from './TopPageComponent.props';
import { Htag, Tag, GrcBox } from '../../components';
import s from './TopPageComponent.module.css';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { Advantages } from '../../components/Advantages/Advantages';
import parse from 'html-react-parser';

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
      {firstCategory === TopLevelCategory.Courses && page.hh && <GrcBox {...page.hh} />}
      {page.advantages && page.advantages.length > 0 && <Advantages advantages={page.advantages} />}
      {page.seoText && <div className={s.seoText}>{parse(page.seoText)}</div>}
      <Htag tag="h2">{'Получемые навыки'}</Htag>
      {page.tags.map(tag => (
        <Tag key={tag} color="primary">
          {tag}
        </Tag>
      ))}
    </section>
  );
};
