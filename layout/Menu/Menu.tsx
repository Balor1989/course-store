import cn from 'classnames';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { firstMenuImem } from '../../interfaces/menu.interface';
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
                {firstLevelMenu.map(menu => (
                    <div key={menu.id}>
                        <a href={`${menu.route}`}>
                            <div className={cn(s.firstElement, {
                                [s.firstLevelActive]: menu.id === firstCategory
                            })}>
                                {menu.icon}
                                <span>{menu.name}</span>
                            </div>
                        </a>
                        {menu.id === firstCategory && buildSecondLevelMenu()}
                    </div>
                ))}
            </>
        );
    };
     
    const buildSecondLevelMenu = () => {
        return (
            <div>
                
           </div>
       )
   }

    return (
        <div className={s.menu}>
         {buildFirstLevelMenu()}
      </div>
    );
};