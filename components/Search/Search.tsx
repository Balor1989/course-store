import { SearchProps } from './Search.props';
import cn from 'classnames';
import s from './Search.module.css';
import { Button, Input } from '..';
import SearchIcon from './Search.svg';
import { useState } from 'react';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  return (
    <div className={cn(className, s.search)} {...props}>
      <Input placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
      <Button className={s.searchButton} appearance={'primary'}>
        <SearchIcon className={s.icon} />
      </Button>
    </div>
  );
};
