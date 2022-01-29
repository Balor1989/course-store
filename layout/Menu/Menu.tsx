import cn from 'classnames';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { firstMenuImem } from '../../interfaces/menu.interface';
import s from './Menu.module.css';
import CourseIcon from './menu-icons/courses.svg';
import BookIcon from './menu-icons/books.svg';
import ServiceIcon from './menu-icons/services.svg';
import SupliesIcon from './menu-icons/suplies.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';

const firstLevelMenu: firstMenuImem[] = [
    { route: 'courses', name: 'Курсы', icon: <CourseIcon />, id: TopLevelCategory.Courses },
    { route: 'service', name: 'Сервисы', icon: <ServiceIcon />, id: TopLevelCategory.Courses },
    { route: 'books', name: 'Книги', icon: <BookIcon />, id: TopLevelCategory.Courses },
    { route: 'suplies', name: 'Товары', icon: <SupliesIcon />, id: TopLevelCategory.Courses },
];

export const Menu = (): JSX.Element => {
   const {menu, setMenu, firstCategory} = useContext(AppContext);

    return (
        <div>
             <ul>
                {menu.map(m => (<li key={m._id.secondCategory}>{ m._id.secondCategory}</li>))}
            </ul>
      </div>
    );
};