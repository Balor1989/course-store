import cn from 'classnames';
import s from './Menu.module.css';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, firstMenuImem, PageItem } from '../../interfaces/menu.interface';
import CourseIcon from './menu-icons/courses.svg';
import BookIcon from './menu-icons/books.svg';
import ServiceIcon from './menu-icons/services.svg';
import ProductIcon from './menu-icons/suplies.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';

const firstLevelMenu: firstMenuImem[] = [
    { route: 'courses', name: 'Курсы', icon: <CourseIcon />, id: TopLevelCategory.Courses },
    { route: 'service', name: 'Сервисы', icon: <ServiceIcon />, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BookIcon />, id: TopLevelCategory.Books },
    { route: 'suplies', name: 'Товары', icon: <ProductIcon />, id: TopLevelCategory.Products },
];

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    const router = useRouter();

    const openSecondLevelMenu = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory === secondCategory) {
                m.isOpened = !m.isOpened;
            }
            return m;
        }));
    };

    const buildFirstLevelMenu = () => {
        return (
            <ul>
                {firstLevelMenu.map(mainMenu => (
                    <li key={mainMenu.id}>
                        <Link href={`/${mainMenu.route}`}>
                            <a>
                                <div className={cn(s.firstElement, {
                                    [s.firstLevelActive]: mainMenu.id === firstCategory
                                })}>
                                    {mainMenu.icon}
                                    <span>{mainMenu.name}</span>
                                </div>
                            </a>
                        </Link>
                        {mainMenu.id === firstCategory && buildSecondLevelMenu(mainMenu)}
                    </li>
                ))}
            </ul>
        );
    };
     
    const buildSecondLevelMenu = (menuItem: FirstLevelMenuItem) => {
       return (
			<div className={s.secondlevelBox}>
               {menu.map(m => {
                   if (m.pages.map(page => page.alias).includes(router.asPath.split('/')[2])) {
                       m.isOpened = true;
                   }
                   return (
                       <div key={m._id.secondCategory}>
                           <div className={s.secondLevel} onClick={()=> openSecondLevelMenu(m._id.secondCategory)}>{m._id.secondCategory}</div>
                           <div className={cn(s.secondLevelBlock, {
                               [s.secondLevelBlockOpened]: m.isOpened
                           })}>
                               {buildThirdLevelMenu(m.pages, menuItem.route)}
                           </div>
                       </div>
                   );
               })}
			</div>
		);
    };

   const buildThirdLevelMenu = (pages: PageItem[], route: string) => {
		return (
			pages.map(page => (
				<a key={page._id} href={`/${route}/${page.alias}`} className={cn(s.thirdLevel, {
                    [s.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath
				})}>
					{page.category}
				</a>
			))
		);
	};

    return (
        <div className={s.menu}>
         {buildFirstLevelMenu()}
      </div>
    );
};