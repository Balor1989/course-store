import { TopPageComponentProps } from './TopPageComponent.props';
import { Htag, Tag, GrcBox } from '../../components';
import s from './TopPageComponent.module.css';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { Advantages } from '../../components/Advantages/Advantages';
import parse from 'html-react-parser';
import { Sort } from '../../components/Sort/Sort';
import { SortEnum } from '../../components/Sort/Sort.props';
import { useReducer } from 'react';
import { sortReducer } from '../../components/Sort/sort.reducer';

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, {
    products,
    sort: SortEnum.Rating,
  });
  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };
  return (
    <section className={s.topPageWrapper}>
      <div className={s.pageComponentTitleBox}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="gray" size="medium">
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
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
