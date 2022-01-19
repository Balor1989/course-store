// import cn from 'classnames';
// import s from './Paragraph.module.css';
import React,{ FunctionComponent } from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { LayoutProps } from "./Layout.props";
import { Main } from "./Main/Main";
import { Sidebar } from "./Sidebar/Sidebar";

const Layout = ({ children }: LayoutProps): JSX.Element => {
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

export const renderWithLayout =<T extends Record<string, unknown>> (Component: FunctionComponent<T>) => {
    return function renderWithLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};