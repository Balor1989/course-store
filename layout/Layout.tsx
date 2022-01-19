// import cn from 'classnames';
// import s from './Paragraph.module.css';
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { LayoutProps } from "./Layout.props";
import { Main } from "./Main/Main";
import { Sidebar } from "./Sidebar/Sidebar";

export const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <Header />
            <Main>
                <Sidebar />
                <section >
                    {children}
                </section>
            </Main>
            <Footer />
        </>
    );
};