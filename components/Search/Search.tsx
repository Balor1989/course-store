import { SearchProps } from './Search.props';
import cn from 'classnames';
import s from './Search.module.css';
import { Button, Input } from '..';
import SearchIcon from './Search.svg';
import { useState } from 'react';
import { useRouter } from 'next/router';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: { search },
    });

    router.push(search);
  };

  const handleKeyDown = (e: { key: string }) => {
    if (e.key == 'Enter') {
      goToSearch();
    }
  };

  return (
    <div className={cn(className, s.search)} {...props}>
      <Input
        placeholder="Search..."
        value={search}
        onChange={event => setSearch(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button className={s.searchButton} appearance={'primary'} onClick={goToSearch}>
        <SearchIcon className={s.icon} />
      </Button>
    </div>
  );
};
