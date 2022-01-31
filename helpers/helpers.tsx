import { TopLevelCategory } from '../interfaces/page.interface';
import CourseIcon from './menu-icons/courses.svg';
import ServiceIcon from './menu-icons/services.svg';
import BookIcon from './menu-icons/books.svg';
import ProductIcon from './menu-icons/suplies.svg';
import { firstMenuImem } from '../interfaces/menu.interface';

export const firstLevelMenu: firstMenuImem[] = [
    { route: 'courses', name: 'Курсы', icon: <CourseIcon />, id: TopLevelCategory.Courses },
    { route: 'service', name: 'Сервисы', icon: <ServiceIcon />, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BookIcon />, id: TopLevelCategory.Books },
    { route: 'suplies', name: 'Товары', icon: <ProductIcon />, id: TopLevelCategory.Products },
];