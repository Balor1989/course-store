import cn from 'classnames';
import s from './Layout.module.css';
import React,{ FunctionComponent } from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { LayoutProps } from "./Layout.props";
import { Sidebar } from "./Sidebar/Sidebar";

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={s.gridWrapper}>
            <Header className={s.header}/>
            <Sidebar className={s.sidebar}/>
            <main className={s.main}>
                {children}
            </main>
            <Footer className={s.footer} />
        </div>
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