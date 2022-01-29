import cn from 'classnames';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, firstMenuImem, PageItem } from '../../interfaces/menu.interface';
import s from './Menu.module.css';
import CourseIcon from './menu-icons/courses.svg';
import BookIcon from './menu-icons/books.svg';
import ServiceIcon from './menu-icons/services.svg';
import ProductIcon from './menu-icons/suplies.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';

const firstLevelMenu: firstMenuImem[] = [
    { route: 'courses', name: 'Курсы', icon: <CourseIcon />, id: TopLevelCategory.Courses },
    { route: 'service', name: 'Сервисы', icon: <ServiceIcon />, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BookIcon />, id: TopLevelCategory.Books },
    { route: 'suplies', name: 'Товары', icon: <ProductIcon />, id: TopLevelCategory.Products },
];

export const Menu = (): JSX.Element => {
   const {menu, setMenu, firstCategory} = useContext(AppContext);

    const buildFirstLevelMenu = () => {
        return (
            <>
                {firstLevelMenu.map(mainMenu => (
                    <div key={mainMenu.id}>
                        <a href={`${mainMenu.route}`}>
                            <div className={cn(s.firstElement, {
                                [s.firstLevelActive]: mainMenu.id === firstCategory
                            })}>
                                {mainMenu.icon}
                                <span>{mainMenu.name}</span>
                            </div>
                        </a>
                        {mainMenu.id === firstCategory && buildSecondLevelMenu(mainMenu)}
                    </div>
                ))}
            </>
        );
    };
     
    const buildSecondLevelMenu = (menuItem: FirstLevelMenuItem) => {
        return (
            <div>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={s.secondlevel}>
                            {m._id.secondCategory}
                            <div className={cn(s.secondLevel, {
                                [s.secondLevelOpen]: m.isOpened
                            })}>
                                {buildThirdLevelMenu(m.pages, menuItem.route)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const buildThirdLevelMenu = (pages: PageItem[], route: string) => {
        return (
            pages.map(page => {
                <a href={`/${route}/${page.alias}`} className={cn(s.thirdLevel, {
                    [s.active]: true
                })}>
                    {page.category}
                </a>;
            })
        );
    };

    return (
        <div className={s.menu}>
         {buildFirstLevelMenu()}
      </div>
    );
};